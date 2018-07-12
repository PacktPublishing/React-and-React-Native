import React from 'react';
import { render } from 'react-dom';

import ArticleList from './ArticleList';
import AddArticle from './AddArticle';
import MyFeature from './MyFeature';

// <MyFeature> is now passed a "addArticle" and a "articleList"
// property. These are functions that return components to render.
render(
  <MyFeature
    addArticle={({
      title,
      summary,
      onChangeTitle,
      onChangeSummary,
      onClickAdd
    }) => (
      <AddArticle
        name="Articles"
        title={title}
        summary={summary}
        onChangeTitle={onChangeTitle}
        onChangeSummary={onChangeSummary}
        onClickAdd={onClickAdd}
      />
    )}
    articleList={({ articles, onClickToggle, onClickRemove }) => (
      <ArticleList
        articles={articles}
        onClickToggle={onClickToggle}
        onClickRemove={onClickRemove}
      />
    )}
  />,
  document.getElementById('root')
);
