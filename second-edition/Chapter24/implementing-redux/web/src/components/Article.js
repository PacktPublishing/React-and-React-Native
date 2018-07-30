import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const textStyle = {
  padding: '5px'
};

class Article extends Component {
  static propTypes = {
    full: PropTypes.string.isRequired,
    fetchingArticle: PropTypes.func.isRequired,
    fetchArticle: PropTypes.func.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  };

  componentWillMount() {
    this.props.fetchingArticle();
    this.props.fetchArticle(this.props.params.id);
  }

  render() {
    return <p style={textStyle}>{this.props.full}</p>;
  }
}

export default connect(
  state => state.get('Article').toJS(),
  dispatch => ({
    fetchingArticle: () =>
      dispatch({
        type: 'FETCHING_ARTICLE'
      }),
    fetchArticle: id => {
      const headers = new Headers();
      headers.append('Accept', 'application/json');

      fetch(`/api/articles/${id}`, { headers })
        .then(resp => resp.json())
        .then(json =>
          dispatch({
            type: 'FETCH_ARTICLE',
            payload: json
          })
        );
    }
  })
)(Article);
