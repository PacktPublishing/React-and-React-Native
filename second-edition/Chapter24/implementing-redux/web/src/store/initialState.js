import { fromJS } from 'immutable';

// The state of the application is contained
// within an Immutable.js Map. Each key represents
// a "slice" of state.
export default fromJS({
  // The "App" state is the generic state that's
  // always visible. This state is not specific to
  // one particular feature, in other words. It has
  // the app title, and links to various article
  // sections.
  App: {
    title: 'Neckbeard News',
    links: [
      { name: 'All', url: '/' },
      { name: 'Local', url: '/local' },
      { name: 'Global', url: '/global' },
      { name: 'Tech', url: '/tech' },
      { name: 'Sports', url: '/sports' }
    ]
  },

  // The "Home" state is where lists of articles are
  // rendered. Initially, there are no articles, so
  // the "articles" list is empty until they're fetched
  // from the API.
  Home: {
    articles: []
  },

  // The "Article" state represents the full article. The
  // assumption is that the user has navigated to a full
  // article page and we need the entire article text here.
  Article: {
    full: ''
  }
});
