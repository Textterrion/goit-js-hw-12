'use strict';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  notFound,
  smoothScroll,
} from './js/render-functions.js';
import getImagesByQuery from './js/pixabay-api';

let page = 1;
let totalHits = 0;
let currentQuery = '';

const form = document.querySelector('.form');
const loadMoreButton = document.querySelector('.load-more-button');

form.addEventListener('submit', async event => {
  event.preventDefault();

  page = 1;
  totalHits = 0;

  clearGallery();
  showLoader();

  const query = document.querySelector('[name="search-text"]').value.trim();

  if (query === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query.',
      position: 'topRight',
    });
    hideLoader();
    return;
  }

  try {
    const data = await getImagesByQuery(query, page);
    currentQuery = query;
    totalHits = data.totalHits;
    const { hits } = data;
    if (hits.length === 0) {
      notFound(query);
      return;
    }

    createGallery(hits);

    if (totalHits > 9) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `An error occurred: ${error.message}`,
      position: 'topRight',
    });
  } finally {
    hideLoader();
    form.reset();
  }
});

loadMoreButton.addEventListener('click', async () => {
  page += 1;
  showLoader();
  hideLoadMoreButton();
  
  try {
    const { hits } = await getImagesByQuery(currentQuery, page);
    createGallery(hits);
    smoothScroll();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `An error occurred: ${error.message}`,
      position: 'topRight',
    });
  } finally {
    if (page * 9 >= totalHits) {
      hideLoadMoreButton();
      iziToast.info({
        title: 'Info',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
      hideLoader();
      return;
    }

    hideLoader();
    showLoadMoreButton();
  }
});
