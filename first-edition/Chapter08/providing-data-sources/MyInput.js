import React, { PropTypes } from 'react';
import { fromJS } from 'immutable';
import { getState, setState } from './store';

// When the filter input value changes.
function onChange(e) {
  // The state that we're working with...
  const state = getState();
  const items = state.get('items');
  const tempItems = state.get('tempItems');

  // The new state that we're going to set on
  // the store.
  let newItems;
  let newTempItems;

  // If the input value is empty, we need to restore the
  // items from "tempItems".
  if (e.target.value.length === 0) {
    newItems = tempItems;
    newTempItems = fromJS([]);
  } else {
    // If "tempItems" hasn't been set, make sure that
    // it gets the current items so that we can restore
    // them later.
    if (tempItems.isEmpty()) {
      newTempItems = items;
    } else {
      newTempItems = tempItems;
    }

    // Filter and set "newItems".
    const filter = new RegExp(e.target.value, 'i');
    newItems = items.filter(i => filter.test(i));
  }

  // Updates the state of the store.
  setState(state.merge({
    items: newItems,
    tempItems: newTempItems,
  }));
}

// Renders a simple input element to filter a list.
const MyInput = ({ value, placeholder }) => (
  <input
    autoFocus
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
);

MyInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

export default MyInput;
