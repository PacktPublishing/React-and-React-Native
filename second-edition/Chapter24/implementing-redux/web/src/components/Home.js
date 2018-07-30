import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Map } from 'immutable';

// Various styles...
const listStyle = {
  listStyle: 'none',
  margin: 0,
  padding: 0
};

const listItemStyle = {
  margin: '0 5px'
};

const titleStyle = {
  background: 'transparent',
  border: 'none',
  font: 'inherit',
  cursor: 'pointer',
  padding: '5px 0'
};

// What to render when the article list is empty
// (true/false). When it's empty, a single elipses
// is displayed.
const emptyMap = Map()
  .set(true, <li style={listItemStyle}>...</li>)
  .set(false, null);

class Home extends Component {
  static propTypes = {
    articles: PropTypes.arrayOf(PropTypes.object).isRequired,
    fetchingArticles: PropTypes.func.isRequired,
    fetchArticles: PropTypes.func.isRequired,
    toggleArticle: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired
  };

  static defaultProps = {
    filter: ''
  };

  // When the component is mounted, there's two actions
  // to dispatch. First, we want to tell the world that
  // we're fetching articles before they're actually
  // fetched. Then, we call "fetchArticles()" to perform
  // the API call.
  componentWillMount() {
    this.props.fetchingArticles();
    this.props.fetchArticles(this.props.filter);
  }

  // When an article title is clicked, toggle the state of
  // the article by dispatching the toggle article action.
  onTitleClick = id => () => this.props.toggleArticle(id);

  render() {
    const { onTitleClick } = this;
    const { articles } = this.props;

    return (
      <ul style={listStyle}>
        {emptyMap.get(articles.length === 0)}
        {articles.map(a => (
          <li key={a.id} style={listItemStyle}>
            <button onClick={onTitleClick(a.id)} style={titleStyle}>
              {a.title}
            </button>
            {/* The summary of the article is displayed
                 based on the "display" property. This state
                 is toggled when the user clicks the title. */}
            <p style={{ display: a.display }}>
              <small>
                <span>{a.summary} </span>
                <Link to={`articles/${a.id}`}>More...</Link>
              </small>
            </p>
          </li>
        ))}
      </ul>
    );
  }
}

// The "connect()" function connects this component
// to the Redux store. It accepts two functions as
// arguments...
export default connect(
  // Maps the immutable "state" object to a JavaScript
  // object. The "ownProps" are plain JSX props that
  // are merged into Redux store data.
  (state, ownProps) =>
    Object.assign(state.get('Home').toJS(), ownProps),

  // Sets the action creator functions as props. The
  // "dispatch()" function is when actually invokes
  // store reducer functions that change the state
  // of the store, and cause new prop values to be passed
  // to this component.
  dispatch => ({
    fetchingArticles: () =>
      dispatch({
        type: 'FETCHING_ARTICLES'
      }),

    fetchArticles: filter => {
      const headers = new Headers();
      headers.append('Accept', 'application/json');

      fetch(`/api/articles/${filter}`, { headers })
        .then(resp => resp.json())
        .then(json =>
          dispatch({
            type: 'FETCH_ARTICLES',
            payload: json
          })
        );
    },

    toggleArticle: payload =>
      dispatch({
        type: 'TOGGLE_ARTICLE',
        payload
      })
  })
)(Home);
