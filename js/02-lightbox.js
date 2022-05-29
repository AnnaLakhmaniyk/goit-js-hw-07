import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

function createImg(items) {
  return items
    .map(
      (item) => `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`
    )
    .join("");
}

const listItemsMarkup = createImg(galleryItems);
// console.log(listItemsMarkup);

galleryEl.innerHTML = listItemsMarkup; //додавання розмітки

let lightbox = new SimpleLightbox(".gallery a", {
  captionSelector: ".gallery__image",
  captionsData: "alt",
  captionDelay: 250,
  animationSpeed: 250,
  doubleTapZoom: 2,
});
