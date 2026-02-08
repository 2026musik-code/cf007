import { connect } from 'cloudflare:sockets';

export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);
        const upgradeHeader = request.headers.get('Upgrade');

        // 1. Handle VLESS WebSocket Connection
        if (upgradeHeader === 'websocket') {
            return await vlessOverWS(request, env.UUID);
        }

        // 2. Handle Telegram Bot Webhook
        if (request.method === 'POST' && url.pathname === `/bot${env.BOT_TOKEN}`) {
            return await handleTelegramUpdate(request, env);
        }

        // 3. Default Response
        return new Response(`VLESS Worker is Running. Send /getconfig to your Telegram Bot.`, {
            status: 200,
            headers: { 'Content-Type': 'text/plain' },
        });
    },
};

/**
 * Handle Telegram Bot Messages
 */
async function handleTelegramUpdate(request, env) {
    const update = await request.json();
    const chatId = update.message?.chat.id;
    const text = update.message?.text;
    const userId = update.message?.from.id;

    if (!chatId || !text) return new Response('OK');

    // Security check: Only Admin can use the bot
    if (userId.toString() !== env.ADMIN_ID.toString()) {
        await sendToTelegram(chatId, "Unauthorized access.", env.BOT_TOKEN);
        return new Response('OK');
    }

    const hostName = request.headers.get('host');

    if (text === '/start' || text === '/getconfig') {
        const vlessLink = `vless://${env.UUID}@${hostName}:443?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F#VLESS_CF_BOT`;
        const message = `🚀 *VLESS Configuration*\n\n` +
                        `*Host:* \`${hostName}\`\n` +
                        `*UUID:* \`${env.UUID}\`\n` +
                        `*Port:* 443\n` +
                        `*TLS:* ON\n` +
                        `*WS Path:* /\n\n` +
                        `*Copy Link:* \n\`${vlessLink}\``;
        
        await sendToTelegram(chatId, message, env.BOT_TOKEN);
    }

    return new Response('OK');
}

async function sendToTelegram(chatId, text, token) {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: chatId,
            text: text,
            parse_mode: 'Markdown'
        })
    });
}

/**
 * Core VLESS Logic
 */
async function vlessOverWS(request, uuid) {
    const webSocketPair = new WebSocketPair();
    const [client, server] = Object.values(webSocketPair);

    server.accept();

    let remoteSocket = null;

    server.addEventListener('message', async (event) => {
        const message = event.data;
        if (!remoteSocket) {
            // VLESS Header parsing
            const buffer = new Uint8Array(message);
            const addressType = buffer[17];
            let addressLength = 0;
            let addressValueIndex = 18;
            let address = '';

            if (addressType === 1) { // IPv4
                address = buffer.slice(addressValueIndex, addressValueIndex + 4).join('.');
                addressValueIndex += 4;
            } else if (addressType === 3) { // Domain
                addressLength = buffer[addressValueIndex];
                addressValueIndex += 1;
                address = new TextDecoder().decode(buffer.slice(addressValueIndex, addressValueIndex + addressLength));
                addressValueIndex += addressLength;
            }

            const port = (buffer[addressValueIndex] << 8) | buffer[addressValueIndex + 1];

            // Connect to destination
            remoteSocket = connect({ hostname: address, port: port });
            
            // Send VLESS response header (success)
            const responseHeader = new Uint8Array([buffer[0], 0]);
            server.send(responseHeader);

            // Pipe remote to websocket
            const writer = server.writable ? server.writable.getWriter() : null;
            remoteSocket.readable.pipeTo(new WritableStream({
                write(chunk) {
                    server.send(chunk);
                }
            }));
            
            // Pipe remaining buffer
            const reader = remoteSocket.writable.getWriter();
            reader.write(buffer.slice(addressValueIndex + 2));
            reader.releaseLock();
        } else {
            const reader = remoteSocket.writable.getWriter();
            await reader.write(message);
            reader.releaseLock();
        }
    });

    return new Response(null, { status: 101, webSocket: client });
}
