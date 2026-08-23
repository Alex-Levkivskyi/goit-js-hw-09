
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const images = [
  {
    preview: "https://cdn.pixabay.com/photo/2019/05/14/16/43/himachal-4203606__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/14/16/43/himachal-4203606_1280.jpg",
    description: "Himalayan Mountain Road",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2018/05/08/21/28/flower-3384195__340.jpg",
    original: "https://cdn.pixabay.com/photo/2018/05/08/21/28/flower-3384195_1280.jpg",
    description: "Flower",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2019/11/24/20/48/stefan-4650399__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/11/24/20/48/stefan-4650399_1280.jpg",
    description: "Stefan",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297__340.jpg",
    original: "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg",
    description: "Avenue",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original: "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flowers",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674337__340.jpg",
    original: "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674337_1280.jpg",
    description: "Mountains",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2019/08/07/14/08/dog-4390885__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/08/07/14/08/dog-4390885_1280.jpg",
    description: "Dog",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2016/12/11/12/02/yellow-584730__340.jpg",
    original: "https://cdn.pixabay.com/photo/2016/12/11/12/02/yellow-584730_1280.jpg",
    description: "Yellow",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2019/07/15/18/29/sunset-4340242__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/07/15/18/29/sunset-4340242_1280.jpg",
    description: "Sunset",
  },
];

const galleryContainer = document.querySelector(".gallery");

const createGalleryMarkup = (items) => {
  return items
    .map(
      ({ preview, original, description }) => `
        <li class="gallery-item">
          <a class="gallery-link" href="${original}">
            <img
              class="gallery-image"
              src="${preview}"
              alt="${description}"
            />
          </a>
        </li>
      `
    )
    .join("");
};

galleryContainer.innerHTML = createGalleryMarkup(images);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});