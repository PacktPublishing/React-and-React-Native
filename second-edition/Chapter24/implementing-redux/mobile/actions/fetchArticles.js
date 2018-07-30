export default dispatch => filter => {
  const headers = new Headers();
  headers.append('Accept', 'application/json');

  return fetch(`http://192.168.86.24:3001/articles/${filter}`, {
    headers
  })
    .then(resp => resp.json())
    .then(json =>
      dispatch({
        type: 'FETCH_ARTICLES',
        payload: json
      })
    );
};
