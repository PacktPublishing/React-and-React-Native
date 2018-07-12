import React, { PropTypes, Component } from 'react';
import {
  ListView,
  TouchableHighlight,
  Text,
} from 'react-native';
import { connect } from 'react-redux';

import styles from '../styles';
import {
  fetchArticle,
  fetchArticles,
} from '../actions';

class ArticleList extends Component {
  static propTypes = {
    fetchArticles: PropTypes.func.isRequired,
    selectArticle: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
  }

  state = {
    source: new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    }),
  }

  componentWillMount() {
    this.props.fetchArticles(this.props.filter);
  }

  componentWillReceiveProps({ items }) {
    this.setState({
      source: this.state.source.cloneWithRows(items),
    });
  }

  renderRow = action => ({ id, title }) => (
    <TouchableHighlight onPress={action(id)}>
      <Text>{title}</Text>
    </TouchableHighlight>
  )

  render() {
    return (
      <ListView
        style={styles.list}
        dataSource={this.state.source}
        renderRow={this.renderRow(this.props.selectArticle)}
        enableEmptySections
      />
    );
  }
}

export default connect(
  state => state.get('Articles').toJS(),
  dispatch => ({
    fetchArticles: fetchArticles(dispatch),
    selectArticle: fetchArticle(dispatch),
  })
)(ArticleList);
