import React from 'react';

const MyComponent = ({ myArray, myNumber }) => (
  <section>
    <ul>{myArray.map(i => <li key={i}>{i}</li>)}</ul>
    <p>{myNumber}</p>
  </section>
);

MyComponent.propTypes = {
  // Expects a property named "myArray" with a non-zero
  // length. If this passes, we return null. Otherwise,
  // we return a new error.
  myArray: (props, name, component) =>
    Array.isArray(props[name]) && props[name].length
      ? null
      : new Error(`${component}.${name}: expecting non-empty array`),

  // Expects a property named "myNumber" that's
  // greater than 0 and less than 99. Otherwise,
  // we return a new error.
  myNumber: (props, name, component) =>
    Number.isFinite(props[name]) &&
    props[name] > 0 &&
    props[name] < 100
      ? null
      : new Error(
          `${component}.${name}: expecting number between 1 and 99`
        )
};

export default MyComponent;
