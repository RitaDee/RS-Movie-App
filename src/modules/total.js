const movieCount = (Movies, num) => {
  const items = Array.from(Movies.children);
  num.innerText = items.length;
  return items;
};

export default movieCount;
