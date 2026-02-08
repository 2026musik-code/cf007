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

// Internal types for the new API structure
interface ExternalBook {
  bookId: string;
  bookName: string;
  coverWap: string;
  chapterCount: number;
  introduction: string;
  tags: string[];
  tagV3s: Tag[];
  playCount: string;
  shelfTime: string;
  // properties that might be missing or different
  rankVo?: {
    rankType: number;
    hotCode: string;
    sort: number;
  };
  protagonist?: string;
}

interface Column {
  columnId: number;
  title: string;
  bookList: ExternalBook[];
}

interface ExternalData {
  columnVoList: Column[];
}

interface ExternalApiResponse {
  status: boolean;
  creator: string;
  data: ExternalData;
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
    // ... keep at least one default item for safety, but typically the fetch will succeed
  ]
};

export async function getFilms(): Promise<ApiResponse> {
  const dataUrl = 'https://magma-api.biz.id/dramabox/vip';

  try {
    const res = await fetch(dataUrl, {
      next: { tags: ['films'], revalidate: 3600 }, // Revalidate every hour
    });

    if (res.ok) {
      const externalData: ExternalApiResponse = await res.json();

      // Flatten all books from all columns
      const allBooks: Film[] = [];

      if (externalData.data && externalData.data.columnVoList) {
        externalData.data.columnVoList.forEach((column) => {
          if (column.bookList) {
            column.bookList.forEach((book, index) => {
              // Map ExternalBook to Film
              const film: Film = {
                bookId: book.bookId,
                bookName: book.bookName,
                coverWap: book.coverWap,
                chapterCount: book.chapterCount,
                introduction: book.introduction,
                tags: book.tags || [],
                tagV3s: book.tagV3s || [],
                rankVo: book.rankVo || {
                  rankType: 3,
                  hotCode: book.playCount || 'N/A', // Use playCount as hotCode
                  sort: index + 1
                },
                protagonist: book.protagonist || '',
                shelfTime: book.shelfTime
              };
              allBooks.push(film);
            });
          }
        });
      }

      return {
        status: externalData.status,
        creator: externalData.creator,
        data: allBooks.length > 0 ? allBooks : DEFAULT_DATA.data // Fallback to default if empty
      };
    }
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }

  return DEFAULT_DATA;
}
