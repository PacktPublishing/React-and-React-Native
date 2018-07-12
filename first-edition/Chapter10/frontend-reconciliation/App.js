import React, { PropTypes } from 'react';
import { Link } from 'react-router';

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

App.propTypes = {
  header: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
};

App.defaultProps = {
  header: (<h1>App</h1>),
  content: (
    <ul>
      { /* Doing something like this is problematic
           when trying to render React components in
           the backend:

           <strong>{typeof window}</strong>

           This type of browser-specific code
           will always generate different content in
           the browser. When this happens, the content
           that was sent down from the server is
           thrown out. */ }

      { /* Links to chaild pages... */ }
      <li><Link to="first">First</Link></li>
      <li><Link to="second">Second</Link></li>
    </ul>
  ),
};

export default App;
