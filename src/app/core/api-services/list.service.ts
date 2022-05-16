import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  newsCards: any[] = [
    {
      id: 'one',
      title: 'Սկսած 1500-ականներից',
      text: 'Լորեմ Իպսումը տպագրության և տպագրական համար նախատեսված մոդելային տեքստ է։ Սկսած 1500',
      image: 'https://npuagb.am/files/images/posts/26d08b6a5bd6fcd63e08d0355c7fa13d.jpg'
    }, {
      id: 'one',
      title: 'Թրաֆիքինգի մասին իրազեկվածության բարձրացման ծրագիր-մրցախաղ',
      text: 'Լորեմ Իպսումը տպագրության և տպագրական համար նախատեսված մոդելային տեքստ է։ Սկսած 1500',
      image: 'https://npuagb.am/files/images/posts/5fcd2b5a3b055bd3c9ca119deb396eab.jpg'
    }, {
      id: 'one',
      title: '«Կիբերանվտանգություն» դասընթաց',
      text: 'Տեղեկատվական և հաղորդակցության տեխնոլոգիաների գործատուների միությունը...',
      image: 'https://npuagb.am/files/images/posts/d42d009386b20b50aa08d40ca4350c09.png'
    }, {
      id: 'one',
      title: 'Ինժեներական ուսուցում ավագ դպրոցում',
      text: 'Ինժեներական ուսուցումը ավագ դպրոցում այլևս երազանք չէ: Այն էլ արդիական և գործնական ինժեներական ուսուցում:',
      image: 'https://npuagb.am/files/images/posts/3033ec54511279215245386e79211b58.png'
    },
  ];
  albumCards = [
    {
      id: 0,
      title: 'Թերթելով պատմության Էջերը',
      text: '',
      image: 'https://npuagb.am/files/images/gallery/2018/04/16/5.jpg'
    }, {
      id: 1,
      title: 'Գեղազարդային իրերի մոդելավորման լաբորատորիա',
      text: '',
      image: 'https://npuagb.am/files/images/gallery/2018/04/16/IMG_15292.jpg'
    }, {
      id: 2,
      title: 'Դիջիտեք 2014 ամենամյա ցուցահանդես',
      text: '',
      image: 'https://npuagb.am/files/images/gallery/2018/04/16/11.jpg'
    }, {
      id: 3,
      title: 'Semiannual works',
      text: 'Semiannual works of students in the specialty Computer Artistic Design',
      image: 'https://npuagb.am/files/images/gallery/2018/12/23/IMG_20181210_115202.jpg'
    },
  ]
  album: any[] = [
    {
      id: 0,
      images: [{
        image: 'https://npuagb.am/files/images/gallery/2018/04/16/5.jpg',
      }, {
        image: 'https://npuagb.am/files/images/gallery/2018/04/16/12.jpg',
      }, {
        image: 'https://npuagb.am/files/images/gallery/2018/04/16/3.jpg', // Support base64 image
      }]
    },
    {
      id: 1,
      images: [{
        image: 'https://npuagb.am/files/images/gallery/2018/04/16/IMG_15292.jpg',
      }, {
        image: 'https://npuagb.am/files/images/gallery/2018/04/16/IMG_15301.jpg',
      }, {
        image: 'https://npuagb.am/files/images/gallery/2018/04/16/IMG_15371.jpg', // Support base64 image
      }]
    },
    {
      id: 2,
      images: [{
        image: 'https://npuagb.am/files/images/gallery/2018/04/16/11.jpg',
      }, {
        image: 'https://npuagb.am/files/images/gallery/2018/04/16/4.jpg',
      }, {
        image: 'https://npuagb.am/files/images/gallery/2018/04/16/52.jpg', // Support base64 image
      }]
    },
    {
      id: 3,
      images: [{
        image: 'https://npuagb.am/files/images/gallery/2018/12/23/IMG_20181210_115202.jpg',
      }, {
        image: 'https://npuagb.am/files/images/gallery/2018/12/23/IMG_20181210_115339.jpg',
      }, {
        image: 'https://npuagb.am/files/images/gallery/2018/12/23/IMG_20181210_115256.jpg', // Support base64 image
      }]
    },
  ]
  imageObject: Array<object> = [{
    image: 'https://npuagb.am/files/images/gallery/2018/04/16/5.jpg',
  }, {
    image: 'https://npuagb.am/files/images/gallery/2018/04/16/12.jpg',
  }, {
    image: 'https://npuagb.am/files/images/gallery/2018/04/16/3.jpg', // Support base64 image
  }
  ];

  constructor() {
  }

  getNews() {
    return this.newsCards;
  }

  getMedia() {
    return this.albumCards;
  }

  getList(listType: string | null) {
    if (listType === 'media') {
      return this.getMedia()
    }
    return this.getNews()
  }

  getAlbumByID(id: number): any[] {
    return this.album.find(alb => alb.id === id).images
  }
}
