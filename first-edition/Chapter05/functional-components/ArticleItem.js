import React from 'react';

export default ({
  article,
  onClickToggle,
  onClickRemove,
}) => (
  <li>
    { /* The "onClickToggle()" callback changes
         the state of the "MyFeature" component. */ }
    <a
      href="#"
      title="Toggle Summary"
      onClick={onClickToggle.bind(null, article.id)}
    >
      {article.title}
    </a>
    &nbsp;

    { /* The "onClickRemove()" callback changes
         the state of the "MyFeature" component. */ }
    <a
      href="#"
      title="Remove"
      onClick={onClickRemove.bind(null, article.id)}
    >
      &#10007;
    </a>
    <p style={{ display: article.display }}>
      {article.summary}
    </p>
  </li>
);
