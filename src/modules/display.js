import getShow from './api.js';
import totalMovie from './total.js';

const counter = document.querySelector('#movie-counter');

const showMovies = (Movies) => {
  Movies.forEach((show) => {

  });
};

const displayMovie = async () => {
  const fetchMovie = await getShow();
  const Movies = fetchMovie.slice(120, 150);
  counter.textContent = '(&{totalMovie(Movie)})';
};

export default displayMovie;