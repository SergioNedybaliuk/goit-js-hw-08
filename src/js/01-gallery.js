// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryList = galleryItems.map(({preview, original, description}) =>
  `<li data-preview="${preview}" class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img src="${preview}" data-source="${original}" alt="${description}" class="gallery__image"/>
  </a>
  </li>`)
  .join("")

  gallery.innerHTML = galleryList;

  SimpleLightbox = new SimpleLightbox(".gallery a", {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 700,
  });


console.log(galleryItems);
