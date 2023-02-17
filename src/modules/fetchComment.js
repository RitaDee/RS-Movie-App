import { postComments, getComments } from './commentApi.js';

const sendComment = async (id) => {
  const submitBtn = document.querySelector(`#item${id}`);
  submitBtn.addEventListener('click', async (e) => {
    const username = document.querySelector('.username').value;
    const usercomment = document.querySelector('.usercomment').value;
    const form = document.querySelector('.Form');
    if (username.length !== 0 && usercomment.length !== 0) {
      await postComments(`item${id}`, username, usercomment);
      console.log(id, username, usercomment);
      form.reset();
      e.preventDefault();
    } else {
      console.log('fill inputs');
    }
  });
};

const getAllComment = async (id) => {
  const container = document.getElementById(`${id}`);
  const submitBtn = document.querySelector(`#item${id}`);
  const data = await getComments(id);
  submitBtn.addEventListener('click', async (e) => {
    data.forEach((elem) => {
      container.innerHTML += elem.comment;
    });
    e.preventDefault();
  });
  console.log(container, submitBtn, data);
};

export { sendComment, getAllComment };