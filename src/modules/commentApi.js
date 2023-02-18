const appId = 'Cdks7edv0UuC8Wi4mnCb';

const getComments = async (id) => {
  const urlComments = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=item${id}`;

  const res = await fetch(urlComments);
  const result = await res.json();
  return result;
};

// post comment on api

const postComments = async (id, name, comments) => {
  console.log(id, name, comments);
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
  });
  const data = response.text();
  return data;
};
export { getComments, postComments };
