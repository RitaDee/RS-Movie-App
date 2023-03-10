import { postComments, getComments } from './commentApi.js';

const getAllComments = async (id) => {
  const data = await getComments(id);
  return data.json();
};

const displayComments = (data) => {
  const table = document.querySelector('.table');
  const commentSpan = document.querySelector('.commentspan');
  if (data.length) {
    table.innerHTML = '';
    data.forEach((elem) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td class="username">${elem.username}</td>
      <td class="comment">${elem.comment}</td>
      <td class="creation_date">${elem.creation_date}</td> `;
      table.appendChild(tr);
    });
    commentSpan.innerHTML = `${data.length} comments for this movie`;
  }
};

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
  }
};

const sendComment = (id, username, usercomment) => {
  if (username && usercomment) {
    const res = postComments(`item${id}`, username, usercomment);
    return res;
  }
  return id;
};

export {
  sendComment, getAllComment, getAllComments, displayComments,
};
