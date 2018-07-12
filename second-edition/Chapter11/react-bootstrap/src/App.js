import React from 'react';
import PropTypes from 'prop-types';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import {
  LinkContainer,
  IndexLinkContainer
} from 'react-router-bootstrap';

import {
  Navbar,
  Nav,
  NavItem,
  MenuItem,
  Grid,
  Row,
  Col
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import Home from './Home';
import Forms from './forms/Forms';
import Lists from './lists/Lists';

// "App" is the parent component of other components that are
// rendered when the route changes. It's job is to render the
// shell of a Bootstrap UI.
const App = ({ children }) => (
  <Router>
    <main>
      {/* The "NavBar" is statically-placed across the
         top of every page. It contains things like the
         title of the application, and menu items. */}
      <Navbar className="navbar-top" fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Mobile-First React</Link>
          </Navbar.Brand>

          {/* The "<Navbar.Taggle>" coponent is used to replace any
             navigation links with a drop-down menu for smaller
             screens. */}
          <Navbar.Toggle />
        </Navbar.Header>

        {/* The actual menu with links to makes. It's wrapped
           in the "<Navbar.Collapse>"" component so that it
           work properly when the links have been collapsed. */}
        <Navbar.Collapse>
          <Nav pullRight>
            <IndexLinkContainer to="/">
              <MenuItem>Home</MenuItem>
            </IndexLinkContainer>
            <LinkContainer to="forms">
              <MenuItem>Forms</MenuItem>
            </LinkContainer>
            <LinkContainer to="lists">
              <MenuItem>Lists</MenuItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Grid fluid>
        <Row>
          {/* This navigation menu has the same links
             as the top navbar. The difference is that
             this navigation is a sidebar. It's completely
             hidden on smaller screens. */}
          <Col sm={3} md={2} className="sidebar">
            <Nav stacked>
              <IndexLinkContainer to="/">
                <NavItem>Home</NavItem>
              </IndexLinkContainer>
              <LinkContainer to="forms">
                <NavItem>Forms</NavItem>
              </LinkContainer>
              <LinkContainer to="lists">
                <NavItem>Lists</NavItem>
              </LinkContainer>
            </Nav>
          </Col>
          <Col
            sm={9}
            smOffset={3}
            md={10}
            mdOffset={2}
            className="content"
          >
            <Route exact path="/" component={Home} />
            <Route exact path="/forms" component={Forms} />
            <Route exact path="/lists" component={Lists} />
          </Col>
        </Row>
      </Grid>
    </main>
  </Router>
);

App.propTypes = {
  children: PropTypes.node
};

export default App;
