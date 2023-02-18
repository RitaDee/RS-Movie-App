import movieCount from './total.js';
import getData from './api.js';
import fetchData from './popUp.js';
import { newLike } from './fetch.js';

const Movies = document.querySelector('.main-show');

const showMovie = async () => {
  const allShows = await getData();
  const sliceShows = allShows.splice(0, 28);
  sliceShows.forEach((show) => {
    const template = `
  <div class="article">
  <div class="img">
    <img src=${show.image.medium}>
  </div>
  <div class="name"> <p>${show.name}</p></div>
  <div id="like-r">
  <p id="heart"><i id="${show.id}" class="fa-regular fa-heart"></i></p>
  <p class="likes"> <span class="${show.id}">0</span> likes</p>
  </div>
  <div id="btn-ctn">
  <button id="${show.name}" data-index="${show.id}" class="comment">comment</button>
  </div>
  </div>`;
    Movies.innerHTML += template;

    const num = document.querySelector('#movie-counter');

    movieCount(Movies, num);

    const heart = document.querySelectorAll('#heart i');
    heart.forEach((hit) => {
      hit.addEventListener('click', () => {
        const id = hit.getAttribute('id');
        newLike(id);
      });
    });
  });
  fetchData();
};

export default showMovie;
