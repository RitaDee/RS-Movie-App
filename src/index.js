import './style.css';
import showMovie from './modules/display.js';
import getLikes from './modules/likes.js';

const showLikes = async () => {
  const allLikes = await getLikes();
  const likeSpan = document.querySelectorAll('.likes span');
  likeSpan.forEach((span) => {
    const index = span.getAttribute('class');
    allLikes.forEach((like) => {
      if (like.item_id === index) {
        span.textContent = like.likes;
      }
    });
  });
};

showLikes();
showMovie();