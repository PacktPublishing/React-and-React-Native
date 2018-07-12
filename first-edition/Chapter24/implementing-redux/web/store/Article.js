import { fromJS } from 'immutable';

const typeMap = fromJS({
  FETCHING_ARTICLE: state =>
    state.set('full', '...'),
  FETCH_ARTICLE: (state, payload) =>
    state.merge(payload),
  FETCHING_ARTICLES: state =>
    state
      .clear()
      .set('full', ''),
});

export default (state, { type, payload }) =>
  typeMap.get(type, s => s)(state, payload);
