import React, { PropTypes } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';

import { fetchArticles as _fetchArticles } from '../actions';
import Title from './Title';
import styles from '../styles';

const Article = ({ full, fetchArticles }) => (
  <View>
    <Title />
    <TouchableHighlight onPress={fetchArticles}>
      <Text style={styles.link}>Back</Text>
    </TouchableHighlight>
    <Text>{full}</Text>
  </View>
);

Article.propTypes = {
  full: PropTypes.string.isRequired,
  fetchArticles: PropTypes.func.isRequired,
};

export default connect(
  state => state
    .get('Article')
    .toJS(),
  dispatch => ({
    fetchArticles: () => {
      dispatch({
        type: 'SELECT_TAB',
        payload: 'All',
      });

      _fetchArticles(dispatch)('');
    },
  })
)(Article);
