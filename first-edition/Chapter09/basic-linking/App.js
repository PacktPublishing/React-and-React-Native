import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const App = ({ content }) => (
  <section>
    {content}
  </section>
);

App.propTypes = {
  content: PropTypes.node.isRequired,
};

// The "content" property has the default content
// for the "App" component. The "<Link>" elements
// handle dealing with the history API. Regular
// "<a>" links result in requests being sent to
// the server.
App.defaultProps = {
  content: (
    <section>
      <p><Link to="first">First</Link></p>
      <p><Link to="second">Second</Link></p>
    </section>
  ),
};

export default App;
