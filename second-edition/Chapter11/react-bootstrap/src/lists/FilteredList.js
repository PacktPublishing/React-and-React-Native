import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  ButtonGroup,
  ListGroupItem,
  ListGroup,
  Glyphicon
} from 'react-bootstrap';

import './FilteredList.css';

// Utility function to get the bootstrap style
// for an item, based on the "done" value.
const itemStyle = done => (done ? { bsStyle: 'success' } : {});

// Utility component for rendering a bootstrap
// icon based on the value of "done".
const ItemIcon = ({ done }) =>
  done ? <Glyphicon glyph="ok" className="item-done" /> : null;

// Renders a list of items, and a set of filter
// controls to change what's displayed in the
// list.
const FilteredList = props => (
  <section>
    {/* Three buttons that control what's displayed
         in the list below. Clicking one of these
         buttons will toggle the state of the others. */}
    <ButtonGroup className="filters">
      <Button active={props.todoFilter} onClick={props.todoClick}>
        Todo
      </Button>
      <Button active={props.doneFilter} onClick={props.doneClick}>
        Done
      </Button>
      <Button active={props.allFilter} onClick={props.allClick}>
        All
      </Button>
    </ButtonGroup>

    {/* Renders the list of items. It passes the
         "props.filter()" function to "items.filter()".
         When the buttons above are clicked, the "filter"
         function is changed. */}
    <ListGroup>
      {props.items.filter(props.filter).map(i => (
        <ListGroupItem
          key={i.name}
          onClick={props.itemClick(i)}
          href="#"
          {...itemStyle(i.done)}
        >
          {i.name}
          <ItemIcon done={i.done} />
        </ListGroupItem>
      ))}
    </ListGroup>
  </section>
);

FilteredList.propTypes = {
  todoFilter: PropTypes.bool.isRequired,
  doneFilter: PropTypes.bool.isRequired,
  allFilter: PropTypes.bool.isRequired,
  todoClick: PropTypes.func.isRequired,
  doneClick: PropTypes.func.isRequired,
  allClick: PropTypes.func.isRequired,
  itemClick: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
};

export default FilteredList;
