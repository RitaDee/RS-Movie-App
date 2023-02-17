import { postComments, getComments } from './commentApi.js';

const sendComment = async (id) => {
  const submitBtn = document.querySelector(`#item${id}`);
  submitBtn.addEventListener('click', async (e) => {
    const username = document.querySelector('.username').value;
    const usercomment = document.querySelector('.usercomment').value;
    const form = document.querySelector('.Form');
    if (username.length !== 0 && usercomment.length !== 0) {
      await postComments(`item${id}`, username, usercomment);
      form.reset();
      e.preventDefault();
    }
  });
};
const getAllComment = async (id) => {
  // const container = document.getElementById(`${id}`);
  const table = document.querySelector('.table');
  // const submitBtn = document.querySelector(`#item${id}`);
  const commentBtn = document.querySelector('.commentBtn');
  const commentSpan = document.querySelector('.commentspan');
  const data = await getComments(id);

  commentBtn.addEventListener('click', (e) => {
    data.forEach((elem) => {
      table.innerHTML += `<tr>
      <td class="username">${elem.username}</td>
      <td class="comment">${elem.comment}</td>
      <td class="creation_date">${elem.creation_date}</td> 
    </tr>`;
    });
    commentSpan.innerHTML += `${data.length} comments for this movie`;
    e.preventDefault();
  });
};

export { sendComment, getAllComment };
