'use strict';

import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export default function getImagesByQuery(query) {
  const params = new URLSearchParams({
    key: '51578655-789f059cc57625b159c2f433b',
    q: query,
    image_type: 'photo',
    per_page: 9,
    orientation: 'horizontal',
    safesearch: true,
  });
  const API = 'https://pixabay.com/api/';

  return axios(`${API}?${params}`)
    .then(response => {
      const { hits } = response.data;
      return hits;
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: `An error occurred: ${error.message}`,
        position: 'topRight',
      });
      return [];
    });
}
