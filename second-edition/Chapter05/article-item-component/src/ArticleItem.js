import React, { Component } from 'react';

export default class ArticleItem extends Component {
  render() {
    // The "article" is mapped from the "ArticleList"
    // component. The "onClickToggle()" and
    // "onClickRemove()" event handlers are passed
    // all the way down from the "MyFeature" component.
    const { article, onClickToggle, onClickRemove } = this.props;

    return (
      <li>
        {/* The "onClickToggle()" callback changes
             the state of the "MyFeature" component. */}
        <a
          href={`#{article.id}`}
          title="Toggle Summary"
          onClick={onClickToggle.bind(null, article.id)}
        >
          {article.title}
        </a>
        &nbsp;
        {/* The "onClickRemove()" callback changes
             the state of the "MyFeature" component. */}
        <a
          href={`#{article.id}`}
          title="Remove"
          onClick={onClickRemove.bind(null, article.id)}
        >
          &#10007;
        </a>
        <p style={{ display: article.display }}>{article.summary}</p>
      </li>
    );
  }
}
