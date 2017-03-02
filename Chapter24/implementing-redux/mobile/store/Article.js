import { fromJS } from 'immutable';

const typeMap = fromJS({
  FETCH_ARTICLE: (state, article) =>
    state.set('full', article.full),
});

export default (state, { type, payload }) =>
  typeMap.get(type, s => s)(state, payload);
