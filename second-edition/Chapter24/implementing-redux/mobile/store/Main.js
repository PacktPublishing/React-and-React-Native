import { fromJS } from 'immutable';

const typeMap = fromJS({
  FETCH_ARTICLE: (state, article) =>
    state
      .set('component', 'article')
      .set('title', article.title),
  FETCH_ARTICLES: state =>
    state.set('component', 'articles'),
  SELECT_CATEGORY: (state, title) =>
    state.set('title', title),
});

export default (state, { type, payload }) =>
  typeMap.get(type, s => s)(state, payload);
