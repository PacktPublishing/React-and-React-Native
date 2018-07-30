import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

import { fetchArticle } from '../actions';
import Title from './Title';
import styles from '../styles';

class Article extends Component {
  onWillFocus = () => {
    this.props.fetchArticle(this.props.navigation.getParam('id'));
  };

  onWillBlur = () => {
    this.props.clear();
  };

  componentDidMount() {
    this.props.navigation.addListener('willFocus', this.onWillFocus);
    this.props.navigation.addListener('willBlur', this.onWillBlur);
  }

  render() {
    return (
      <View>
        <Title />
        <Text>{this.props.full}</Text>
      </View>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    ...state.get('Article').toJS(),
    ...ownProps
  }),
  dispatch => ({
    fetchArticle: id => {
      fetchArticle(dispatch, id);
    },
    clear: () => dispatch({ type: 'CLEAR' })
  })
)(Article);
