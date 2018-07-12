import React from 'react';
import PropTypes from 'prop-types';

import MyUser from './MyUser';

const MyComponent = ({ myDate, myCount, myUsers }) => (
  <section>
    {/* Requires a specific "Date" method. */}
    <p>{myDate.toLocaleString()}</p>

    {/* Number or string works here. */}
    <p>{myCount}</p>
    <ul>
      {/* "myUsers" is expected to be an array of
           "MyUser" instances. So we know that it's
           safe to use the "id" and "name" property. */}
      {myUsers.map(i => <li key={i.id}>{i.name}</li>)}
    </ul>
  </section>
);

// The properties spec is looking for an instance of
// "Date", a choice between a string or a number, and
// an array filled with specific types.
MyComponent.propTypes = {
  myDate: PropTypes.instanceOf(Date),
  myCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  myUsers: PropTypes.arrayOf(PropTypes.instanceOf(MyUser))
};

export default MyComponent;
