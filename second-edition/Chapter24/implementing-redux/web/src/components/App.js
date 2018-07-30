import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import { connect } from 'react-redux';

// Components that render application state.
import Home from './Home';
import Article from './Article';

// Higher order component for making the
// various article section components out of
// the "Home" component. The only difference
// is the "filter" property. Having unique JSX
// element names is easier to read than a bunch
// of different property values.
const articleList = filter => props => (
  <Home {...props} filter={filter} />
);

const categoryListStyle = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex'
};

const categoryItemStyle = {
  padding: '5px'
};

const Local = articleList('local');
const Global = articleList('global');
const Tech = articleList('tech');
const Sports = articleList('sports');

// Routes to the home page, the different
// article sections, and the article details page.
// The "<Provider>" element is how we pass Redux
// store data to each of our components.
export default connect(state => state.get('App').toJS())(
  ({ title, links }) => (
    <Router>
      <main>
        <h1>{title}</h1>
        <ul style={categoryListStyle}>
          {/* Renders a link for each article category.
             The key thing to note is that the "links"
             value comes from a Redux store. */}
          {links.map(l => (
            <li key={l.url} style={categoryItemStyle}>
              <NavLink
                exact
                to={l.url}
                activeStyle={{ fontWeight: 'bold' }}
              >
                {l.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <section>
          <Route exact path="/" component={Home} />
          <Route exact path="/local" component={Local} />
          <Route exact path="/global" component={Global} />
          <Route exact path="/tech" component={Tech} />
          <Route exact path="/sports" component={Sports} />
          <Route exact path="/articles/:id" component={Article} />
        </section>
      </main>
    </Router>
  )
);
