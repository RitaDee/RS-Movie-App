import getData from './api.js';
import {
  sendComment, getAllComment,
} from './fetchComment.js';

const clickClose = (container) => {
  const cancelBtn = document.querySelector('.cancel');
  cancelBtn.addEventListener('click', () => {
    container.innerHTML = '';
  });
};

const fetchData = async () => {
  const data = await getData();
  const res = data.splice(0, 28);

  const container = document.querySelector('.alert');
  const btn = document.querySelectorAll('.comment');

  btn.forEach((item) => {
    item.addEventListener('click', (e) => {
      const item = e.target.getAttribute('data-index');
      const dataObj = res.find(
        (resObj) => parseInt(resObj.id, 10) === parseInt(item, 10),
      );
      container.innerHTML += `
          <div class="popup">
          <div class="content">
          <div class="part">
          <i class="fa-solid fa-x close fa-2x cancel" aria-hidden="true"></i>
          <img class="popImage" src="${dataObj.image.medium}"/>
          <p class="namepop">${dataObj.name}</p>
          <div id="${dataObj.id}">
            <span class="commentspan"></span>
            <table class="table">
              <tr>
              <td>username</td>
              <td>comment</td>
              <td>creation_date</td>
              </tr>
            </table>
          </div>
          <form id="form">
            <h2>Add Comment</h2><br>
            <input type="text" id="username" placeholder="Your name" required/>
            <textarea rows="5" id="usercomment" placeholder="Your comment" required></textarea>
            <button class="btnSubmit" id="item${dataObj.id}" type="submit">Comment</button>
          </form>
          </div>
          </div>
          </div
          `;
      const form = document.querySelector('#form');
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const table = document.querySelector('.table');
        const name = document.querySelector('#username');
        const comment = document.querySelector('#usercomment');
        const username = name.value;
        const usercomment = comment.value;
        await sendComment(parseInt(item, 10), username, usercomment);
        table.innerHTML = '';
        getAllComment(parseInt(item, 10));
        form.reset();
      });
      getAllComment(parseInt(item, 10));
      clickClose(container);
    });
  });
};

export default fetchData;
