import React from 'react';
import { render } from 'react-dom';

import { connect, getState, setState } from './store';
import MyInput from './MyInput';
import MyList from './MyList';

// Compose the "connected" versions of "MyInput" and
// "MyList", so that they automatically receive updates
// when the store changes state.
const ConnectedInput = connect(MyInput);
const ConnectedList = connect(MyList);

// Setup the default store state...
setState(
  getState().merge({
    filterValue: '',
    placeholder: 'Search...',
    items: ['First', 'Second', 'Third', 'Fourth']
  })
);

render(
  <section>
    <ConnectedInput />
    <ConnectedList />
  </section>,
  document.getElementById('root')
);
