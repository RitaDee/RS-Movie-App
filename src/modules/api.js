// import { showMovie, displayMovie } from './display.js';

const url = 'https://api.tvmaze.com/shows';

const getShow = async () => {
  await fetch(
    url,
  )
    .then((response) => response.json())
    .then((response) => JSON.stringify(response));
// .then((response) => console.log(JSON.stringify(response)));
};

export default getShow;
