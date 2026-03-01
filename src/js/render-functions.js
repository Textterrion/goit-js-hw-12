'use strict';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function createGallery(images) {
  const gallery = document.querySelector('.gallery');

  const galleryMarkup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
          <li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
              <img
                class="gallery-image" width="360" height="200"
                src="${webformatURL}"
                alt="${tags}"
              />
            </a>
            <div class="info-card">
              <p class="info-item">
                <b>Likes</b> ${likes}
              </p>
              <p class="info-item">
                <b>Views</b> ${views}
              </p>
              <p class="info-item">
                <b>Comments</b> ${comments}
              </p>
              <p class="info-item">
                <b>Downloads</b> ${downloads}
              </p>
            </div>
          </li>`;
      }
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', galleryMarkup);

  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  }).refresh();
}

export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  if (gallery) {
    gallery.innerHTML = '';
  }
}
export function showLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.remove('hidden');
  }
}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.add('hidden');
  }
}

export function showLoadMoreButton() {
  const loadMoreButton = document.querySelector('.load-more-button');
  if (loadMoreButton) {
    loadMoreButton.classList.remove('hidden');
  }
}

export function hideLoadMoreButton() {
  const loadMoreButton = document.querySelector('.load-more-button');
  if (loadMoreButton) {
    loadMoreButton.classList.add('hidden');
  }
}

export function notFound(query) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = `<p class="not-found">No results found for "${query}". Please try again.</p>`;
}

export function smoothScroll() {
  setTimeout(() => {
    const card = document.querySelector('.gallery-item');
    if (!card) return;

    const cardHeight = card.getBoundingClientRect().height + 48;

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  }, 300);
}
