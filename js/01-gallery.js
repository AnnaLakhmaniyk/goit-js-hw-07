import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
// console.log(galleryEl);

function createImg(items) {
  return items
    .map(
      (item) => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src= "${item.preview}"
      data-source= "${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
    )
    .join("");
}

const listItemsMarkup = createImg(galleryItems);

galleryEl.innerHTML = listItemsMarkup; //додавання розмітки

galleryEl.addEventListener("click", onOpenModal); //виклик слухача події

function onOpenModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const imgSrc = event.target.dataset.source;
  const imgAlt = event.target.alt;
  console.log(imgSrc, imgAlt);

  onOpenModalImg(imgSrc, imgAlt); //виклик функції відкриття модального вікна
}

function onOpenModalImg(src, alt) {
  const instance = basicLightbox.create(`
    <img src="${src}" alt="${alt}"  width="800" height="600">
`);
  instance.show();

  window.addEventListener("keydown", onEskClose); //виклик слухача клавіатури

  function onEskClose(event) {
    if (event.code === "Escape") {
      instance.close();
    }
    window.removeEventListener("keydown", onEskClose); //зняття слухача з клавіатури
  }
}
