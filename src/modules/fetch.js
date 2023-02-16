import getLikes, { likesUrl } from './likes.js';

const fetchLike = (reveal) => {
  reveal.forEach((items) => {
    const likes = async () => {
      const predata = await getLikes();
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

const newLike = async (id) => {
  const res = await fetch(
    likesUrl,
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  window.location.reload();
  return res;
};

export { fetchLike, newLike };