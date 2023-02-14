import showMovie from './display.js';

const url = 'https://api.tvmaze.com/shows';

const getShow = async () => {
  await fetch(
    url,
  )
    .then((response) => response.json())
    // .then((response) => JSON.stringify(response))
    .then((response) => showMovie(response));
};

export default getShow;
