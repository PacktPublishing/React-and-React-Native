import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, TouchableHighlight, Text } from 'react-native';
import { connect } from 'react-redux';

import styles from '../styles';
import { fetchArticle, fetchArticles } from '../actions';

class ArticleList extends Component {
  static propTypes = {
    fetchArticles: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired
  };

  static getDerivedStateFromProps({ items }, state) {
    return {
      ...state,
      source: items
    };
  }

  state = {
    source: []
  };

  componentDidMount() {
    this.props.fetchArticles(this.props.filter);
  }

  renderRow = action => ({ item: { value } }) => (
    <TouchableHighlight onPress={action(value.id)}>
      <Text>{value.title}</Text>
    </TouchableHighlight>
  );

  render() {
    return (
      <FlatList
        style={styles.list}
        data={this.state.source.map((value, key) => ({
          value,
          key: key.toString()
        }))}
        renderItem={this.renderRow(id => () =>
          this.props.navigation.navigate('Article', { id })
        )}
        enableEmptySections
      />
    );
  }
}

export default connect(
  (state, ownProps) => ({
    ...state.get('Articles').toJS(),
    ...ownProps
  }),
  dispatch => ({
    fetchArticles: fetchArticles(dispatch)
  })
)(ArticleList);
