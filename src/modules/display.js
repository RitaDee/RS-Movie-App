import getShow from './api.js';

const storeData = getShow();
console.log(storeData);

const Movies = document.querySelector('.main-show');

const showMovie = () => {
  const template = `
  <div class="article">
  <div class="img">
    <h1>Hello World</h1>
  </div>
  <div class="name"> <p>Shaaibu</p> </div>
  <div class="like-r>
  <p><i class="fa-regular fa-heart"></i></p>
  <p class="likes"> <span>0</span> likes</p>
  </div>
  <div>
  <button id="comment">comment</button>
  </div>
  </div>`;
  Movies.innerHTML += template;
};

export default showMovie;