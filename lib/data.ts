export interface Tag {
  tagId: number;
  tagName: string;
  tagEnName: string;
}

export interface Film {
  bookId: string;
  bookName: string;
  coverWap: string;
  chapterCount: number;
  introduction: string;
  tags: string[];
  tagV3s: Tag[];
  rankVo: {
    rankType: number;
    hotCode: string;
    sort: number;
  };
  protagonist: string;
  shelfTime: string;
}

export interface ApiResponse {
  status: boolean;
  creator: string;
  data: Film[];
}

const DEFAULT_DATA: ApiResponse = {
  "status": true,
  "creator": "Andre Api",
  "data": [
    {
      "bookId": "42000005231",
      "bookName": "Jadi Tuan Muda dalam Semalam",
      "coverWap": "https://hwztchapter.dramaboxdb.com/data/cppartner/4x2/42x0/420x0/42000005231/42000005231.jpg?t=1769677236767",
      "chapterCount": 70,
      "introduction": "Emir Feris tinggal bersama ibunya di kawasan kumuh selama 22 tahun. Lantaran tidak mampu memenuhi gaya hidup mewah pacarnya, Emir pun diputuskan secara sepihak.Namun, siapa sangka, di malam yang sama, kakek Emir yang merupakan orang terkaya di daerah tersebut datang mencari Emir?",
      "tags": [
        "Pembalikan Identitas",
        "Bangkitnya Orang Biasa",
        "Serangan Balik",
        "Kembali Bangkit",
        "CEO",
        "Orang Biasa"
      ],
      "tagV3s": [
        {
          "tagId": 1338,
          "tagName": "Pembalikan Identitas",
          "tagEnName": "Hidden Identity"
        },
        {
          "tagId": 1339,
          "tagName": "Bangkitnya Orang Biasa",
          "tagEnName": "Underdog Story"
        },
        {
          "tagId": 1340,
          "tagName": "Serangan Balik",
          "tagEnName": "Counterattack"
        },
        {
          "tagId": 10001,
          "tagName": "Kembali Bangkit",
          "tagEnName": "Comeback Story"
        },
        {
          "tagId": 1324,
          "tagName": "CEO",
          "tagEnName": "Billionaire"
        },
        {
          "tagId": 1331,
          "tagName": "Orang Biasa",
          "tagEnName": "A Nobody"
        }
      ],
      "rankVo": {
        "rankType": 3,
        "hotCode": "19.6K",
        "sort": 1
      },
      "protagonist": "Emir Feris,  Joana Aulia",
      "shelfTime": "2026-02-07 17:00:00"
    },
    {
      "bookId": "42000005001",
      "bookName": "Jodoh Kita Telah Berakhir",
      "coverWap": "https://hwztchapter.dramaboxdb.com/data/cppartner/4x2/42x0/420x0/42000005001/42000005001.jpg?t=1769509078748",
      "chapterCount": 62,
      "introduction": "Yudi Kirana sangat mencintai Eni Taslim. Setelah disakiti cinta pertamanya, Mirza Winata, Eni hidup kacau dan impulsif menerima lamaran Yudi saat mendengar kabar pernikahan Mirza. Yudi mengorbankan mimpinya menjadi dokter demi Eni, namun Eni tetap dingin karena belum melupakan Mirza. Ketika Mirza kembali dari luar negeri, Yudi akhirnya menggugat cerai.",
      "tags": [
        "Mengejar Suami",
        "Kesempatan Kedua",
        "Kekasih Kontrak",
        "Perselingkuhan",
        "Penebusan",
        "Modern"
      ],
      "tagV3s": [
        {
          "tagId": 1681,
          "tagName": "Mengejar Suami",
          "tagEnName": "Winning Him Back"
        },
        {
          "tagId": 1422,
          "tagName": "Kesempatan Kedua",
          "tagEnName": "Second Chance"
        },
        {
          "tagId": 1669,
          "tagName": "Kekasih Kontrak",
          "tagEnName": "Contract Lover"
        },
        {
          "tagId": 1341,
          "tagName": "Perselingkuhan",
          "tagEnName": "Betrayal"
        },
        {
          "tagId": 1478,
          "tagName": "Penebusan",
          "tagEnName": "Redemption"
        },
        {
          "tagId": 1318,
          "tagName": "Modern",
          "tagEnName": "Modern"
        }
      ],
      "rankVo": {
        "rankType": 3,
        "hotCode": "12.7K",
        "sort": 2
      },
      "protagonist": "Yudi Kirana,  Eni Taslim",
      "shelfTime": "2026-02-02 00:00:00"
    },
    {
      "bookId": "42000004864",
      "bookName": "Suami yang Diremehkan",
      "coverWap": "https://hwztchapter.dramaboxdb.com/data/cppartner/4x2/42x0/420x0/42000004864/42000004864.jpg?t=1769414312425",
      "chapterCount": 70,
      "introduction": "Hans Danar, pewaris konglomerat, menyembunyikan identitas dan hidup 5 tahun sebagai menantu keluarga Lurda untuk membalas budi. Ia diam-diam membantu istrinya, Lisa Lurda, naik menjadi CEO wanita elite. Terhasut teman jahat, Lisa meninggalkan Hans. Di perjamuan besar, ia terkejut melihat mantan suaminya berdiri di puncak kekuasaan.",
      "tags": [
        "Pembalikan Identitas",
        "Serangan Balik",
        "Mengejar Istri",
        "Menantu Pria",
        "Tokoh Legendaris",
        "Modern"
      ],
      "tagV3s": [
        {
          "tagId": 1338,
          "tagName": "Pembalikan Identitas",
          "tagEnName": "Hidden Identity"
        },
        {
          "tagId": 1340,
          "tagName": "Serangan Balik",
          "tagEnName": "Counterattack"
        },
        {
          "tagId": 1680,
          "tagName": "Mengejar Istri",
          "tagEnName": "Winning Her Back"
        },
        {
          "tagId": 1329,
          "tagName": "Menantu Pria",
          "tagEnName": "Son-in-Law"
        },
        {
          "tagId": 1332,
          "tagName": "Tokoh Legendaris",
          "tagEnName": "Divine Tycoon"
        },
        {
          "tagId": 1318,
          "tagName": "Modern",
          "tagEnName": "Modern"
        }
      ],
      "rankVo": {
        "rankType": 3,
        "hotCode": "12.3K",
        "sort": 3
      },
      "protagonist": "Hans Danar,  Lisa Lurda",
      "shelfTime": "2026-02-02 17:00:00"
    },
    {
      "bookId": "42000005442",
      "bookName": "Istriku, Aku Memang Dewa (Sulih Suara)",
      "coverWap": "https://hwztchapter.dramaboxdb.com/data/cppartner/4x2/42x0/420x0/42000005442/42000005442.jpg?t=1770020068636",
      "chapterCount": 88,
      "introduction": "Celia Sandi mengira telah menipu suaminya, Feri Lianto, agar pergi ke gunung demi melindunginya dari bencana. Namun, Feri ternyata pergi untuk mewarisi ilmu dari Dewa Tua. Lima tahun kemudian, Feri kembali sebagai seorang Dewa. Setelah menjadi murid Dewa Perang, ia menghadapi berbagai ujian. Dari video viral hingga keluarga kaya yang datang untuk membatalkan pertunangan, ia menunjukkan bahwa kekuatan sejatinya jauh melampaui yang pernah mereka bayangkan.",
      "tags": [
        "Serangan Balik",
        "Kembali Bangkit",
        "Dewa Perang",
        "Kekuatan Khusus",
        "Modern",
        "Pria Dominan"
      ],
      "tagV3s": [
        {
          "tagId": 1340,
          "tagName": "Serangan Balik",
          "tagEnName": "Counterattack"
        },
        {
          "tagId": 10001,
          "tagName": "Kembali Bangkit",
          "tagEnName": "Comeback Story"
        },
        {
          "tagId": 1330,
          "tagName": "Dewa Perang",
          "tagEnName": "War God"
        },
        {
          "tagId": 1334,
          "tagName": "Kekuatan Khusus",
          "tagEnName": "The Chosen One"
        },
        {
          "tagId": 1318,
          "tagName": "Modern",
          "tagEnName": "Modern"
        },
        {
          "tagId": 1323,
          "tagName": "Pria Dominan",
          "tagEnName": "Powerful Male Lead"
        }
      ],
      "rankVo": {
        "rankType": 3,
        "hotCode": "11.8K",
        "sort": 4
      },
      "protagonist": "Celia Sandi,  Feri Lianto",
      "shelfTime": "2026-02-03 10:03:00"
    },
    {
      "bookId": "42000006068",
      "bookName": "Cinta Terkhianati, Takdir yang Terulang",
      "coverWap": "https://hwztchapter.dramaboxdb.com/data/cppartner/4x2/42x0/420x0/42000006068/42000006068.jpg?t=1770362778307",
      "chapterCount": 57,
      "introduction": "Laura Madya percaya akan cinta, namun dikhianati Mario Kamil yang menjualnya pada musuh. Laura tewas secara tragis, lalu Evan Nagata datang membalas dendam dan menyusulnya. Kemudian, Laura hidup kembali di masa SMA dan ia bertekad membongkar topeng Mario, lalu merebut cinta sejatinya yang pernah hilang.",
      "tags": [
        "Balas Dendam",
        "Terlahir Kembali",
        "Penebusan",
        "Serangan Balik",
        "Kekuatan Khusus",
        "Modern"
      ],
      "tagV3s": [
        {
          "tagId": 1394,
          "tagName": "Balas Dendam",
          "tagEnName": "Revenge"
        },
        {
          "tagId": 1405,
          "tagName": "Terlahir Kembali",
          "tagEnName": "Rebirth"
        },
        {
          "tagId": 1459,
          "tagName": "Penebusan",
          "tagEnName": "Redemption"
        },
        {
          "tagId": 1399,
          "tagName": "Serangan Balik",
          "tagEnName": "Counterattack"
        },
        {
          "tagId": 1371,
          "tagName": "Kekuatan Khusus",
          "tagEnName": "The Chosen One"
        },
        {
          "tagId": 1352,
          "tagName": "Modern",
          "tagEnName": "Modern"
        }
      ],
      "rankVo": {
        "rankType": 3,
        "hotCode": "7.2K",
        "sort": 5
      },
      "protagonist": "Evan Nagata,  Laura Madya",
      "shelfTime": "2026-02-06 16:17:15"
    },
    {
      "bookId": "42000006056",
      "bookName": "Janji yang Tersisa (Sulih Suara) ",
      "coverWap": "https://hwztchapter.dramaboxdb.com/data/cppartner/4x2/42x0/420x0/42000006056/42000006056.jpg?t=1770357233628",
      "chapterCount": 60,
      "introduction": "Alira dan Ardan adalah sepasang kekasih. Alira terluka saat menyelamatkan Ardan dan cedera itu membuatnya tidak bisa memiliki anak. Ardan mengadopsi seorang anak perempuan yang kemudian Alira sayangi seperti anaknya sendiri. Saat akan mendaftarkan putrinya ke sekolah, Alira pergi untuk mengurus pendaftaran. Namun, dia diberi tahu bahwa surat nikahnya palsu, dan putrinya ternyata adalah anak kandung Ardan dengan sekretarisnya, Indira...",
      "tags": [
        "Kabur Saat Hamil",
        "Perselingkuhan",
        "Balas Dendam",
        "Pembalikan Identitas",
        "Wanita Mandiri",
        "Modern"
      ],
      "tagV3s": [
        {
          "tagId": 1397,
          "tagName": "Kabur Saat Hamil",
          "tagEnName": "Secret Baby"
        },
        {
          "tagId": 1400,
          "tagName": "Perselingkuhan",
          "tagEnName": "Betrayal"
        },
        {
          "tagId": 1394,
          "tagName": "Balas Dendam",
          "tagEnName": "Revenge"
        },
        {
          "tagId": 1395,
          "tagName": "Pembalikan Identitas",
          "tagEnName": "Hidden Identity"
        },
        {
          "tagId": 1452,
          "tagName": "Wanita Mandiri",
          "tagEnName": "Independent Woman"
        },
        {
          "tagId": 1352,
          "tagName": "Modern",
          "tagEnName": "Modern"
        }
      ],
      "rankVo": {
        "rankType": 3,
        "hotCode": "6.6K",
        "sort": 6
      },
      "protagonist": "Alira Sari,  Ardan Cahya",
      "shelfTime": "2026-02-06 16:27:22"
    },
    {
      "bookId": "42000005225",
      "bookName": "Si Cantik Melamarku",
      "coverWap": "https://hwztchapter.dramaboxdb.com/data/cppartner/4x2/42x0/420x0/42000005225/42000005225.jpg?t=1769675714796",
      "chapterCount": 80,
      "introduction": "Simon, pelayan KTV, menolong Nina, putri orang kaya yang ditindas. Nina mengira Simon sebagai obat penawarnya dan mengambil salah satu kalung miliknya sebagai tanda. Enam tahun kemudian, Simon bekerja kasar di proyek Grup Jawari demi mengobati ibu angkatnya. Saat semua menertawakannya, Nina tiba-tiba datang membawa anak. Melihat kalung yang sama, sang anak langsung memanggil Simon ayah.",
      "tags": [
        "Bangkitnya Orang Biasa",
        "Serangan Balik",
        "Cinta Semalam",
        "Orang Biasa",
        "Cinta Setelah Menikah",
        "Modern"
      ],
      "tagV3s": [
        {
          "tagId": 1339,
          "tagName": "Bangkitnya Orang Biasa",
          "tagEnName": "Underdog Story"
        },
        {
          "tagId": 1340,
          "tagName": "Serangan Balik",
          "tagEnName": "Counterattack"
        },
        {
          "tagId": 1665,
          "tagName": "Cinta Semalam",
          "tagEnName": "One Night Stand"
        },
        {
          "tagId": 1331,
          "tagName": "Orang Biasa",
          "tagEnName": "A Nobody"
        },
        {
          "tagId": 1423,
          "tagName": "Cinta Setelah Menikah",
          "tagEnName": "Love After Marriage"
        },
        {
          "tagId": 1318,
          "tagName": "Modern",
          "tagEnName": "Modern"
        }
      ],
      "rankVo": {
        "rankType": 3,
        "hotCode": "5.7K",
        "sort": 7
      },
      "protagonist": "Simon Wijaya,  Nina Jawari",
      "shelfTime": "2026-02-03 17:00:00"
    },
    {
      "bookId": "42000004867",
      "bookName": "Dikhianati, Dinikahi Dewa Perang",
      "coverWap": "https://hwztchapter.dramaboxdb.com/data/cppartner/4x2/42x0/420x0/42000004867/42000004867.jpg?t=1769414550877",
      "chapterCount": 66,
      "introduction": "Putri sah Bella Sutara dirampas tunangan dan maharnya oleh adik tiri, Livia, sementara mantan suaminya ingin menjadikannya selir. Demi membalas, Bella menikah dengan penguasa utara yang dikira tiran tua. Di malam nikah, ia kaget suaminya adalah Bobby Kemal, dewa perang yang pernah ia selamatkan. Bersama, mereka menundukkan musuh, menggagalkan intrik, membuka perdagangan, dan membangun kejayaan.",
      "tags": [
        "Balas Dendam",
        "Pembalikan Identitas",
        "Intrik Istana",
        "Dewa Perang",
        "Wanita Mandiri",
        "Cinta Setelah Menikah"
      ],
      "tagV3s": [
        {
          "tagId": 1394,
          "tagName": "Balas Dendam",
          "tagEnName": "Revenge"
        },
        {
          "tagId": 1395,
          "tagName": "Pembalikan Identitas",
          "tagEnName": "Hidden Identity"
        },
        {
          "tagId": 1410,
          "tagName": "Intrik Istana",
          "tagEnName": "Palace Intrigue"
        },
        {
          "tagId": 1369,
          "tagName": "Dewa Perang",
          "tagEnName": "War God"
        },
        {
          "tagId": 1452,
          "tagName": "Wanita Mandiri",
          "tagEnName": "Independent Woman"
        },
        {
          "tagId": 1393,
          "tagName": "Cinta Setelah Menikah",
          "tagEnName": "Love After Marriage"
        }
      ],
      "rankVo": {
        "rankType": 3,
        "hotCode": "5.2K",
        "sort": 8
      },
      "protagonist": "Bella Sutara,  Bobby Kemal",
      "shelfTime": "2026-02-02 17:00:00"
    },
    {
      "bookId": "42000004855",
      "bookName": "Pengawalku, Penyelamatku",
      "coverWap": "https://hwztchapter.dramaboxdb.com/data/cppartner/4x2/42x0/420x0/42000004855/42000004855.jpg?t=1769412242778",
      "chapterCount": 60,
      "introduction": "Aris Natama seorang pengawal tingkat atas dengan keahlian luar biasa, disewa untuk melindungi Gita Wisman yang terjebak krisis dan intrik keluarga besar. Aris menghadapi serangan misterius, musuh kuat, serta kesalahpahaman di antara mereka. Dalam pertarungan penuh semangat, rahasia masa lalu terungkap dan misinya terselesaikan melalui perlindungan serta penebusan.",
      "tags": [
        "Perselingkuhan",
        "Serangan Balik",
        "Intrik Keluarga",
        "Penebusan",
        "Dewa Perang",
        "Modern"
      ],
      "tagV3s": [
        {
          "tagId": 1341,
          "tagName": "Perselingkuhan",
          "tagEnName": "Betrayal"
        },
        {
          "tagId": 1340,
          "tagName": "Serangan Balik",
          "tagEnName": "Counterattack"
        },
        {
          "tagId": 1350,
          "tagName": "Intrik Keluarga",
          "tagEnName": "Family Intrigue"
        },
        {
          "tagId": 1478,
          "tagName": "Penebusan",
          "tagEnName": "Redemption"
        },
        {
          "tagId": 1330,
          "tagName": "Dewa Perang",
          "tagEnName": "War God"
        },
        {
          "tagId": 1318,
          "tagName": "Modern",
          "tagEnName": "Modern"
        }
      ],
      "rankVo": {
        "rankType": 3,
        "hotCode": "4.7K",
        "sort": 9
      },
      "protagonist": "Aris Natama,  Gita Wisman",
      "shelfTime": "2026-02-02 17:00:00"
    },
    {
      "bookId": "42000006057",
      "bookName": "Hati yang Tersesat (Sulih Suara)",
      "coverWap": "https://hwztchapter.dramaboxdb.com/data/cppartner/4x2/42x0/420x0/42000006057/42000006057.jpg?t=1770357375030",
      "chapterCount": 50,
      "introduction": "Alleta terikat dengan dua bersaudara Keluarga Aksara, Alzian dan Elzion selama dua puluh tahun. Kedua saudara itu pernah sangat menyayanginya, tetapi semuanya berubah setelah kehadiran Kania. Alleta menderita banyak ketidakadilan, dan perlahan menjauh dari saudara-saudara Keluarga Aksara. Alleta akhirnya putus asa dan memutuskan untuk menikah dengan pewaris Keluarga Danendra, meninggalkan tempat yang menyakitkan ini...",
      "tags": [
        "Intrik Keluarga",
        "Cinta Segitiga",
        "Penyesalan",
        "Sahabat Masa Kecil",
        "Putri Kaya",
        "Cinta Setelah Menikah"
      ],
      "tagV3s": [
        {
          "tagId": 1411,
          "tagName": "Intrik Keluarga",
          "tagEnName": "Family Intrigue"
        },
        {
          "tagId": 1380,
          "tagName": "Cinta Segitiga",
          "tagEnName": "Love Triangle"
        },
        {
          "tagId": 1654,
          "tagName": "Penyesalan",
          "tagEnName": "All-Too-Late"
        },
        {
          "tagId": 1381,
          "tagName": "Sahabat Masa Kecil",
          "tagEnName": "Childhood Sweetheart"
        },
        {
          "tagId": 1450,
          "tagName": "Putri Kaya",
          "tagEnName": "Heiress"
        },
        {
          "tagId": 1393,
          "tagName": "Cinta Setelah Menikah",
          "tagEnName": "Love After Marriage"
        }
      ],
      "rankVo": {
        "rankType": 3,
        "hotCode": "2.8K",
        "sort": 10
      },
      "protagonist": "Alzian Aksara,  Alleta Awani",
      "shelfTime": "2026-02-06 17:16:41"
    }
  ]
};

export async function getFilms(): Promise<ApiResponse> {
  const dataUrl = process.env.NEXT_PUBLIC_DATA_URL;

  if (dataUrl) {
    try {
      const res = await fetch(dataUrl, {
        next: { tags: ['films'], revalidate: 3600 }, // Revalidate every hour or on demand
      });
      if (res.ok) {
        return await res.json();
      }
    } catch (error) {
      console.error('Failed to fetch data from GitHub:', error);
    }
  }

  return DEFAULT_DATA;
}
