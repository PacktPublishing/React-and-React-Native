import { fromJS } from 'immutable';

const typeMap = fromJS({
  // Clear any old articles right before
  // we fetch new articles.
  FETCHING_ARTICLES: state =>
    state.update('articles', a => a.clear()),

  // Articles have been fetched. Update the
  // "articles" state, and make sure that the
  // summary display is "none".
  FETCH_ARTICLES: (state, payload) =>
    state.set(
      'articles',
      fromJS(payload)
        .map(a => a.set('display', 'none'))
    ),

  // Toggles the state of the selected article
  // "id". First we have to find the index of
  // the article so that we can update it's
  // "display" state. If it's already hidden,
  // we show it, and vice-versa.
  TOGGLE_ARTICLE: (state, id) =>
    state.updateIn([
      'articles',
      state
        .get('articles')
        .findIndex(a => a.get('id') === id),
      'display',
    ], display =>
      display === 'none' ?
        'block' : 'none'
    ),
});

export default (state, { type, payload }) =>
  typeMap.get(type, s => s)(state, payload);
