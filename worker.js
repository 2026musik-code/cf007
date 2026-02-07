export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Routing untuk WebSocket
    if (url.pathname.startsWith("/ws")) {
      return await handleWebSocket(request);
    }

    // Routing untuk gRPC
    if (url.pathname.startsWith("/grpc")) {
      return await handleGRPC(request);
    }

    // Default response
    return new Response("VLESS Worker aktif", { status: 200 });
  }
};

async function handleWebSocket(request) {
  const target = "ws://127.0.0.1:10000"; // arahkan ke Xray/VLESS server Anda
  const response = await fetch(target, {
    headers: request.headers,
    method: request.method,
    body: request.body
  });
  return response;
}

async function handleGRPC(request) {
  const target = "grpc://127.0.0.1:20000"; // arahkan ke gRPC listener Xray
  const response = await fetch(target, {
    headers: request.headers,
    method: request.method,
    body: request.body
  });
  return response;
}