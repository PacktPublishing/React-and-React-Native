import React, { PropTypes } from 'react';
import { IndexLink } from 'react-router';
import { connect } from 'react-redux';

const categoryListStyle = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
};

const categoryItemStyle = {
  padding: '5px',
};

const App = ({
  title,
  links,
  children,
}) => (
  <main>
    <h1>{title}</h1>
    <ul style={categoryListStyle}>
      { /* Renders a link for each article category.
           The key thing to note is that the "links"
           value comes from a Redux store. */ }
      {links.map(l => (
        <li key={l.url} style={categoryItemStyle}>
          <IndexLink
            to={l.url}
            activeStyle={{ fontWeight: 'bold' }}
          >
            {l.name}
          </IndexLink>
        </li>
      ))}
    </ul>
    <section>
      {children}
    </section>
  </main>
);

App.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes
    .arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types
      url: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types
    })).isRequired,
  children: PropTypes.node,
};

export default connect(
  state => state.get('App').toJS()
)(App);
