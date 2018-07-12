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

// Link parameter and query data...
const param = 'From Param';
const query = { echo: 'From Query' };

App.defaultProps = {
  content: (
    <section>
      { /* This "<Link>" uses a paramter as part of
           the "to" property. */}
      <p><Link to={`echo/${param}`}>Echo param</Link></p>

      { /* This "<Link>" uses the "query" property
           to add query parameters to the link URL. */ }
      <p><Link to="echo" query={query}>Echo query</Link></p>
    </section>
  ),
};

export default App;
