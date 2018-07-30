export default (dispatch, id) => {
  const headers = new Headers();
  headers.append('Accept', 'application/json');

  return fetch(`http://192.168.86.24:3001/articles/${id}`, {
    headers
  })
    .then(resp => resp.json())
    .then(json =>
      dispatch({
        type: 'FETCH_ARTICLE',
        payload: json
      })
    );
};
