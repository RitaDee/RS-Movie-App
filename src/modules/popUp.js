import getData from './api.js';
import { sendComment, getAllComment } from './fetchComment.js';

const fetchData = async () => {
  const data = await getData();
  const res = data.splice(0, 28);

  const container = document.querySelector('.alert');
  const btn = document.querySelectorAll('.comment');

  const clickClose = () => {
    const cancelBtn = document.querySelector('.cancel');
    cancelBtn.addEventListener('click', () => {
      container.innerHTML = '';
    });
  };
  btn.forEach((item) => {
    item.addEventListener('click', (e) => {
      const item = e.target.getAttribute('id');
      res.forEach((elem) => {
        if (item === elem.name) {
          container.innerHTML += `
          <div class="popup">
          <div class="content">
          <div class="part">
          <i class="fa-solid fa-x close fa-2x cancel" aria-hidden="true"></i>
          <img class="popImage" src="${elem.image.medium}"/>
          <p class="namepop">${elem.name}</p>
          <div id="${elem.id}"></div>
          <form class="Form">
            <h2>Add Comment</h2><br>
            <input type="text" class="username" placeholder="Your name" required/>
            <textarea rows="5" class="usercomment" placeholder="Your comment" required></textarea>
            <button class="btnSubmit" id="item${elem.id}" type="submit">Comment</button>
          </form>
          </div>
          </div>
          </div
          `;
          clickClose();
          sendComment(elem.id);
          getAllComment(elem.id);
        }
      });
    });
  });
};

export default fetchData;