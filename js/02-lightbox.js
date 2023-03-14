import { galleryItems } from './gallery-items.js';
// Change code below this line

const cardsMarkUp = document.querySelector('.gallery');

const greateImportImages = createBgkImageMarkUp(galleryItems);

cardsMarkUp.insertAdjacentHTML('beforeEnd', greateImportImages);

function createBgkImageMarkUp (galleryItems){
  return galleryItems
  .map(({original, preview, description}) => {
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`
  }).join("");
}

cardsMarkUp.addEventListener('click', (evt) => {

    evt.preventDefault();
  
    const isImeagesSwatchEl = evt.target.classList.contains('gallery__image');
  
    if(!isImeagesSwatchEl){
      return;
    }
    const user = new SimpleLightbox('.gallery a', {animationSpeed: 250,captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250});
  });
  
