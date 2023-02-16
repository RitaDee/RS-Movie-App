const addLikes = (id) => {
  const increaseLikes = async () => {
    const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/qzyJ0OF1qEV0miRaPOXO/likes/',
      {
        method: 'post',
        body: JSON.stringify({ item_id: id }),
        headers: { 'content-type': 'application/json' },
      });
    const predata = res.text();
    return predata;
  };
  increaseLikes();
};

export default addLikes;
