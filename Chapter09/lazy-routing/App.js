import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// The "App" component is divided into
// "header" and "content" sections, and will
// simply render these properties.
const App = ({ header, content }) => (
  <section>
    <header>
      {header}
    </header>
    <main>
      {content}
    </main>
  </section>
);

// The "header" and "content" properties need to be
// renderable values.
App.propTypes = {
  header: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
};

// The default content for our "App" component.
App.defaultProps = {
  header: (<h1>App</h1>),
  content: (
    <ul>
      <li><Link to="users">Users</Link></li>
      <li><Link to="groups">Groups</Link></li>
    </ul>
  ),
};

export default App;
