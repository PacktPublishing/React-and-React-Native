import React, { PropTypes } from 'react';
import {
  TabBarIOS,
} from 'react-native';
import { connect } from 'react-redux';

import styles from '../styles';
import listIcon from '../list.png';
import listSelectedIcon from '../list-selected.png';
import { fetchArticles as _fetchArticles } from '../actions';

const onPress = (
  title,
  filter,
  selectTab,
  fetchArticles,
) => () => {
  selectTab(title);
  fetchArticles(filter);
};

const Categories = ({
  items,
  children,
  selectTab,
  fetchArticles,
}) => (
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
        onPress={onPress(
          i.title,
          i.filter,
          selectTab,
          fetchArticles
        )}
        renderAsOriginal
      >
        {children}
      </TabBarIOS.Item>
    ))}
  </TabBarIOS>
);

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types
    selected: PropTypes.bool.isRequired, // eslint-disable-line react/no-unused-prop-types
  })).isRequired,
  children: PropTypes.node,
  selectTab: PropTypes.func.isRequired,
  fetchArticles: PropTypes.func.isRequired,
};

export default connect(
  (state, ownProps) => Object.assign(
    state.get('Categories').toJS(),
    ownProps
  ),
  dispatch => ({
    fetchArticles: _fetchArticles(dispatch),
    selectTab: title => dispatch({
      type: 'SELECT_CATEGORY',
      payload: title,
    }),
  })
)(Categories);
