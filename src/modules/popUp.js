import getData from './api.js';

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
          <form>
            <h2>Add Comment</h2><br>
            <input type="text" placeholder="Your name" />
            <textarea rows="5" placeholder="Your comment"></textarea>
            <button type="submit">Comment</button>
          </form>
          </div>
          </div>
          </div
          `;
          clickClose();
        }
      });
    });
  });
};

export default fetchData;