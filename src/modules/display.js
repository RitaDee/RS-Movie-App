const Movies = document.querySelector('.main-show');

const showMovie = (allShows) => {
  const sliceShows = allShows.splice(0, 30);
  sliceShows.forEach((show) => {
    const template = `
  <div class="article">
  <div class="img">
    <img src=${show.image.medium}
  </div>
  <div class="name"> <p>${show.name}</p></div>
  <div id="like-r">
  <p><i class="fa-regular fa-heart"></i></p>
  <p class="likes"> <span>0</span> likes</p>
  </div>
  <div>
  <button id="comment">comment</button>
  </div>
  </div>`;
    Movies.innerHTML += template;
  });
};

export default showMovie;