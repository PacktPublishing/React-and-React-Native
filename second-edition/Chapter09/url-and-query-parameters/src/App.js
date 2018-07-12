import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const App = ({ children }) => <section>{children}</section>;

App.propTypes = {
  children: PropTypes.node.isRequired
};

// Link parameter and query data...
const param = 'From Param';
const query = new URLSearchParams({ msg: 'From Query' });

App.defaultProps = {
  children: (
    <section>
      {/* This "<Link>" uses a paramter as part of
           the "to" property. */}
      <p>
        <Link to={`echo/${param}`}>Echo param</Link>
      </p>

      {/* This "<Link>" uses the "query" property
           to add query parameters to the link URL. */}
      <p>
        <Link to={`echo?${query.toString()}`} query={query}>
          Echo query
        </Link>
      </p>
    </section>
  )
};

export default App;
