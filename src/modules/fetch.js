import addLikes from './likes.js';

const fetchLike = (reveal) => {
  reveal.forEach((items) => {
    const likes = async () => {
      const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/qzyJ0OF1qEV0miRaPOXO/likes/');
      const predata = res.json();
      return predata;
    };
    likes().then((data) => {
      data.forEach((dat) => {
        if (parseInt(items.dataset.id, 10) === dat.item_id) {
          const like = items.querySelector('.likes');
          like.innerText = dat.likes;
        }
      });
    });
  });
};

const newLike = (heart, index, id) => {
  heart.forEach((hit, ind) => {
    hit.addEventListener('click', () => {
      if (ind === index) {
        addLikes(id);
        const parent = hit.parentElement.parentElement.parentElement;
        const eachlike = parent.querySelector('.likes');
        const eachIntext = eachlike.innerText;
        const increase = parseInt(eachIntext, 10) + 1;
        eachlike.innerText = increase;
      }
    });
  });
};

export { fetchLike, newLike };