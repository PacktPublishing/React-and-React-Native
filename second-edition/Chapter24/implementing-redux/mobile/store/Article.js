import { fromJS } from 'immutable';

const typeMap = fromJS({
  FETCH_ARTICLE: (state, article) =>
    state.set('title', article.title).set('full', article.full),
  CLEAR: state => state.set('title', '').set('full', '')
});

export default (state, { type, payload }) =>
  typeMap.get(type, s => s)(state, payload);
