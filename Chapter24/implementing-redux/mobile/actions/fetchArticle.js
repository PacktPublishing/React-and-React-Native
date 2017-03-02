export default dispatch => id => () => {
  const headers = new Headers();
  headers.append('Accept', 'application/json');

  return fetch(`http://192.168.86.114:3000/articles/${id}`, { headers })
    .then(resp => resp.json())
    .then(json => dispatch({
      type: 'FETCH_ARTICLE',
      payload: json,
    }));
};
