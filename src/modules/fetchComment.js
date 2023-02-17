import { postComments, getComments } from './commentApi.js';

const getAllComment = async (id) => {
  const table = document.querySelector('.table');
  const commentSpan = document.querySelector('.commentspan');
  const data = await getComments(id);
  if (data.length) {
    data.forEach((elem) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td class="username">${elem.username}</td>
      <td class="comment">${elem.comment}</td>
      <td class="creation_date">${elem.creation_date}</td> `;
      table.appendChild(tr);
    });
    commentSpan.innerHTML = `${data.length} comments for this movie`;
  } else {
    const h3 = document.createElement('h3');
    h3.textContent = 'No Comments';
    table.appendChild(h3);
  }
};

const sendComment = async (id) => {
  const username = document.querySelector('.username');
  const usercomment = document.querySelector('.usercomment');
  const form = document.querySelector('.Form');
  if (username.value.length !== 0 && usercomment.value.length !== 0) {
    const res = await postComments(`item${id}`, username.value, usercomment.value);
    form.reset();
    getAllComment(id);
    return res;
  }
  return id;
};

export { sendComment, getAllComment };
