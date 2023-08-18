import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery")

function createMarkUp(arr){
    return arr.map(({preview, original, description})=>{
        return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
    }).join("")

}

const markUp = createMarkUp(galleryItems)
console.log(markUp);

gallery.insertAdjacentHTML("beforeend", markUp)

gallery.addEventListener("click", onClick)

function onClick(evt){
evt.preventDefault()
const img = evt.target.dataset.source;
const alt = evt.target.alt;

const instance = basicLightbox.create(`
<img
class="gallery__image"
src="${img}"
alt="${alt}"
/>`)

instance.show()
   
document.addEventListener('keydown', onClose)
function onClose(evt){
 if (evt.code === "Escape"){
   instance.close()
document.removeEventListener('keydown', onClose)
console.log("pdoisvfpnodbzhvj");
 }
}
}

