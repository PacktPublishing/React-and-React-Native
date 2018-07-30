import React from 'react';
import PropTypes from 'prop-types';
import { TabBarIOS } from 'react-native';
import { connect } from 'react-redux';

import styles from '../styles';
import listIcon from '../list.png';
import listSelectedIcon from '../list-selected.png';

const Categories = ({ items, children, selectTab }) => (
  <TabBarIOS
    unselectedTintColor="darkslategrey"
    tintColor="ghostwhite"
    barTintColor="slategrey"
    style={styles.tabBar}
  >
    {items.map(i => (
      <TabBarIOS.Item
        key={i.title}
        title={i.title}
        selected={i.selected}
        icon={listIcon}
        selectedIcon={listSelectedIcon}
        onPress={() => {
          selectTab(i.title);
        }}
        renderAsOriginal
      >
        {children}
      </TabBarIOS.Item>
    ))}
  </TabBarIOS>
);

Categories.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      selected: PropTypes.bool.isRequired
    })
  ).isRequired,
  children: PropTypes.node,
  selectTab: PropTypes.func.isRequired
};

export default connect(
  (state, ownProps) =>
    Object.assign(state.get('Categories').toJS(), ownProps),
  dispatch => ({
    selectTab: title =>
      dispatch({
        type: 'SELECT_CATEGORY',
        payload: title
      })
  })
)(Categories);
