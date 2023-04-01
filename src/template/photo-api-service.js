import axios from 'axios';
import Notiflix from 'notiflix';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34809960-e72b1bf02b7f952b124a41dc8';

export default class PhotoApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchPhotoCards() {
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          key: API_KEY,
          q: this.searchQuery,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: true,
          per_page: 40,
          page: this.page,
        },
      });
      const data = response.data;
      if (data.hits.length === 0) {
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      } else {
        this.incrementPage();
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

// import axios from 'axios';
// import Notiflix from 'notiflix';

// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '34809960-e72b1bf02b7f952b124a41dc8';

// export default class PhotoApiService {
//   constructor() {
//     this.searchQuery = '';
//     this.page = 1;
//   }

//   async fetchPhotoCards() {
//     try {
//       const response = await axios.get(BASE_URL, {
//         params: {
//           key: API_KEY,
//           q: this.searchQuery,
//           image_type: 'photo',
//           orientation: 'horizontal',
//           safesearch: true,
//           per_page: 40,
//           page: this.page,
//         },
//       });
//       const data = response.data;
//       if (data.hits.length === 0) {
//         return Notiflix.notify(
//           'Sorry, there are no images matching your search query. Please try again.'
//         );
//       } else {
//         this.incrementPage();
//         return data;
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   incrementPage() {
//     this.page += 1;
//   }

//   resetPage() {
//     this.page = 1;
//   }

//   get query() {
//     return this.searchQuery;
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }
// }
