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
      <li><Link to="first">First</Link></li>
      <li><Link to="second">Second</Link></li>
    </ul>
  ),
};

export default App;
