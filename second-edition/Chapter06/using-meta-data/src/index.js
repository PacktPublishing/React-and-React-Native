import React from 'react';
import { render } from 'react-dom';

import MyUser from './MyUser';

// Performs the initial rendering of "<MyUser>".
const myUser = render(<MyUser />, document.getElementById('root'));

// Sets the state, with a new "modified" value.
// Since the modified state has changed, the
// component will re-render.
myUser.setState({
  modified: new Date(),
  first: 'First1',
  last: 'Last1'
});

// The "first" and "last" states have changed,
// but the "modified" state has not. This means
// that the "First2" and "Last2" values will
// not be rendered.
myUser.setState({
  first: 'First2',
  last: 'Last2'
});
