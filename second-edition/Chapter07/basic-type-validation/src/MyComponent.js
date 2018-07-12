import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({
  myString,
  myNumber,
  myBool,
  myFunc,
  myArray,
  myObject
}) => (
  <section>
    {/* Strings and numbers can be rendered
         just about anywhere. */}
    <p>{myString}</p>
    <p>{myNumber}</p>

    {/* Booleans are typically used as property values. */}
    <p>
      <input type="checkbox" defaultChecked={myBool} />
    </p>

    {/* Functions can return values, or be assigned as
         event handler property values. */}
    <p>{myFunc()}</p>

    {/* Arrays are typically mapped to produce new JSX elements. */}
    <ul>{myArray.map(i => <li key={i}>{i}</li>)}</ul>

    {/* Objects typically use their properties in some way. */}
    <p>{myObject.myProp}</p>
  </section>
);

// The "propTypes" specification for this component.
MyComponent.propTypes = {
  myString: PropTypes.string,
  myNumber: PropTypes.number,
  myBool: PropTypes.bool,
  myFunc: PropTypes.func,
  myArray: PropTypes.array,
  myObject: PropTypes.object
};

export default MyComponent;
