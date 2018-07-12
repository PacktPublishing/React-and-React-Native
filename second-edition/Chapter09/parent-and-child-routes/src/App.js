import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

// The "User" components rendered with the "/users"
// route.
import UsersHeader from './users/UsersHeader';
import UsersMain from './users/UsersMain';

// The "Groups" components rendered with the "/groups"
// route.
import GroupsHeader from './groups/GroupsHeader';
import GroupsMain from './groups/GroupsMain';

// The "header" and "main" properties are the rendered
// components specified in the route. They're placed
// in the JSX of this component - "App".
const App = () => (
  <Router>
    <section>
      <nav>
        <NavLink
          exact
          to="/"
          style={{ padding: '0 10px' }}
          activeStyle={{ fontWeight: 'bold' }}
        >
          Home
        </NavLink>
        <NavLink
          exact
          to="/users"
          style={{ padding: '0 10px' }}
          activeStyle={{ fontWeight: 'bold' }}
        >
          Users
        </NavLink>
        <NavLink
          exact
          to="/groups"
          style={{ padding: '0 10px' }}
          activeStyle={{ fontWeight: 'bold' }}
        >
          Groups
        </NavLink>
      </nav>
      <header>
        <Route exact path="/" render={() => <h1>Home</h1>} />
        <Route exact path="/users" component={UsersHeader} />
        <Route exact path="/groups" component={GroupsHeader} />
      </header>
      <main>
        <Route exact path="/users" component={UsersMain} />
        <Route exact path="/groups" component={GroupsMain} />
      </main>
    </section>
  </Router>
);

export default App;
