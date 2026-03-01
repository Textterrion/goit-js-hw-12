'use strict';

import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export default async function getImagesByQuery(query, page = 1) {
  const params = new URLSearchParams({
    key: '51578655-789f059cc57625b159c2f433b',
    q: query,
    image_type: 'photo',
    per_page: 18,
    page,
    orientation: 'horizontal',
    safesearch: true,
  });
  const API = 'https://pixabay.com/api/';

  try {
    const response = await axios.get(API, { params });
    return response.data;
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `An error occurred: ${error.message}`,
      position: 'topRight',
    });
    return { hits: [], totalHits: 0, total: 0 };
  }
}


