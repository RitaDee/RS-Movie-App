const appId = 'x7SedcmnnF8GWHDjKuID';

const getComments = async (id) => {
  const urlComments = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=item${id}`;

  const res = await fetch(urlComments);
  const result = await res.json();
  return result;
};

// post comment on api

const postComments = (id, name, comments) => {
  const add = async () => {
    const posted = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments/`;
    const response = await fetch(posted, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
        username: name,
        comment: comments,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(() => true)
      .catch(() => false);
    return response;
  };
  add();
};
export { getComments, postComments };
