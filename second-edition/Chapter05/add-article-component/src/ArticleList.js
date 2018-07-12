import React, { Component } from 'react';
import ArticleItem from './ArticleItem';

export default class ArticleList extends Component {
  render() {
    // The properties include things that are passed in
    // from the feature component. This includes the list
    // of articles to render, and the two event handlers
    // that change state of the feature component. These,
    // in turn, are passed to the "ArticleItem" component.
    const { articles, onClickToggle, onClickRemove } = this.props;

    // Now this component maps to an "<ArticleItem>" collection.
    return (
      <ul>
        {articles.map(i => (
          <ArticleItem
            key={i.id}
            article={i}
            onClickToggle={onClickToggle}
            onClickRemove={onClickRemove}
          />
        ))}
      </ul>
    );
  }
}
