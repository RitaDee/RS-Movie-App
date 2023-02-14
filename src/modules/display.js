import getShow from './api.js';

const counter = document.querySelector('#movie-counter');

const showMovie = (arr) => {
  const Movies = document.querySelector('.main-show');
  const template = `
  <div class="article">
  <div class="img">
    <img src=${arr.show.image.medium}>
  </div>
  <div class="name"> <p> ${arr.show.name} </p> </div>
  <div class="like-r>
  <p><i class="fa-regular fa-heart"></i></p>
  <p class="likes"> <span>0</span> likes</p>
  </div>
  <div>
  <button id="comment">comment</button>
  </div>
  </div>`;

  const list = document.createElement('li');
  list.setAttribute('data-id', arr.show.id);
  list.classList.add('list');
  list.innerHTML = template;
  Movies.appendChild(list);
};

const displayMovie = async () => {
  const fetchMovie = await getShow();
  const Movies = fetchMovie.slice(120, 150);
  counter.textContent = '(&{totalMovie(Movie)})';
};

export default { showMovie, displayMovie };