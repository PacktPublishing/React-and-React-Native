import React from 'react';
import { Route, Link } from 'react-router-dom';

import FirstHeader from './first/FirstHeader';
import FirstContent from './first/FirstContent';
import SecondHeader from './second/SecondHeader';
import SecondContent from './second/SecondContent';

export default () => (
  <section>
    <header>
      <Route exact path="/" render={() => <h1>App</h1>} />
      <Route exact path="/first" component={FirstHeader} />
      <Route exact path="/second" component={SecondHeader} />
    </header>
    <main>
      <Route
        exact
        path="/"
        render={() => (
          <ul>
            <li>
              <Link to="first">First</Link>
            </li>
            <li>
              <Link to="second">Second</Link>
            </li>
          </ul>
        )}
      />
      <Route exact path="/first" component={FirstContent} />
      <Route exact path="/second" component={SecondContent} />
    </main>
  </section>
);
