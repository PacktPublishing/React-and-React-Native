import React from 'react';
import ArticleItem from './ArticleItem';

export default ({ articles, onClickToggle, onClickRemove }) => (
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
