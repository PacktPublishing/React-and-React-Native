import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import First from './First';
import Second from './Second';

const App = () => (
  <Router>
    <section>
      <nav>
        <p>
          <Link to="first">First</Link>
        </p>
        <p>
          <Link to="second">Second</Link>
        </p>
      </nav>
      <section>
        <Route path="/first" component={First} />
        <Route path="/second" component={Second} />
      </section>
    </section>
  </Router>
);

export default App;
