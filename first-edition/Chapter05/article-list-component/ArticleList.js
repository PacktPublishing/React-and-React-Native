import React, { Component } from 'react';

export default class ArticleList extends Component {
  render() {
    // The properties include things that are passed in
    // from the feature component. This includes the list
    // of articles to render, and the two event handlers
    // that change state of the feature component.
    const {
      articles,
      onClickToggle,
      onClickRemove,
    } = this.props;

    return (
      <ul>
        {articles.map(i => (
          <li key={i.id}>
            { /* The "onClickToggle()" callback changes
                 the state of the "MyFeature" component. */ }
            <a
              href="#"
              title="Toggle Summary"
              onClick={onClickToggle.bind(null, i.id)}
            >
              {i.title}
            </a>
            &nbsp;

            { /* The "onClickRemove()" callback changes
                 the state of the "MyFeature" component. */ }
            <a
              href="#"
              title="Remove"
              onClick={onClickRemove.bind(null, i.id)}
            >
              &#10007;
            </a>
            <p style={{ display: i.display }}>
              {i.summary}
            </p>
          </li>
        ))}
      </ul>
    );
  }
}
