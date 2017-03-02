import React, { PropTypes } from 'react';

// The "header" and "main" properties are the rendered
// components specified in the route. They're placed
// in the JSX of this component - "App".
const App = ({ header, main }) => (
  <section>
    <header>
      {header}
    </header>
    <main>
      {main}
    </main>
  </section>
);

// The "header" and "main" properties should be
// a React element.
App.propTypes = {
  header: PropTypes.element,
  main: PropTypes.element,
};

export default App;
