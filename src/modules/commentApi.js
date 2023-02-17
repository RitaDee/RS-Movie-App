const appId = 'qzyJ0OF1qEV0miRaPOXO';

const getComments = async (id) => {
  const urlComments = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=item${id}`;

  const res = await fetch(urlComments);
  const result = await res.json();
  return result;
};

// post comment on api

const postComments = (id, name, comments) => {
  const add = async () => {
    const urlPost = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments/`;

    const response = await fetch(urlPost, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
        username: name,
        comment: comments,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.text();
    return data;
  };
  add();
};
export { getComments, postComments };