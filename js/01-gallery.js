import { galleryItems } from './gallery-items.js';
// Change code below this line

const cardsMarkUp = document.querySelector('.gallery');

const greateImportImages = createBgkImageMarkUp(galleryItems);

cardsMarkUp.insertAdjacentHTML('beforeEnd', greateImportImages);

function createBgkImageMarkUp (galleryItems){
  return galleryItems
  .map(({original, description}) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${original}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
  }).join("");
}


cardsMarkUp.addEventListener('click', (evt) => {

  evt.preventDefault();

  const isImeagesSwatchEl = evt.target.classList.contains('gallery__image');

  if(!isImeagesSwatchEl){
    return;
  }

  const instance = basicLightbox.create(`
  <img src="${evt.target.src}" width="800" height="600">
`)
instance.show();
});




