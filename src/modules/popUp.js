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
          <div class="head">
          <img class="popImage" src="${elem.image.medium}" height="10px"/>
          <h2>${elem.name}</h2>
          <i class="fa-solid fa-x close fa-2x cancel" aria-hidden="true"></i>
          </div>
          <div>
            <form>
              <input type="text" placeholder="Your name" />
            <form>
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