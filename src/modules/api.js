const url = 'https://api.tvmaze.com/shows/1';

const getShow = async () => {
  const data = await fetch(`${url}`);
  return data.json();
};

export default getShow;
