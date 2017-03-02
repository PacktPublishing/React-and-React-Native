import React from 'react';
import { Provider } from 'react-redux';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
} from 'react-router';

// Components that render application state.
import App from './components/App';
import Home from './components/Home';
import Article from './components/Article';

// Our Redux/Flux store.
import store from './store';

// Higher order component for making the
// various article section components out of
// the "Home" component. The only difference
// is the "filter" property. Having unique JSX
// element names is easier to read than a bunch
// of different property values.
const articleList = filter => props => (
  <Home {...props} filter={filter} />
);

const Local = articleList('local');
const Global = articleList('global');
const Tech = articleList('tech');
const Sports = articleList('sports');

// Routes to the home page, the different
// article sections, and the article details page.
// The "<Provider>" element is how we pass Redux
// store data to each of our components.
export default (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="local" component={Local} />
        <Route path="global" component={Global} />
        <Route path="tech" component={Tech} />
        <Route path="sports" component={Sports} />
        <Route path="articles/:id" component={Article} />
      </Route>
    </Router>
  </Provider>
);
