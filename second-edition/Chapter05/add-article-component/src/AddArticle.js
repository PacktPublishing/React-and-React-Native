import React, { Component } from 'react';

export default class AddArticle extends Component {
  render() {
    const {
      name,
      title,
      summary,
      onChangeTitle,
      onChangeSummary,
      onClickAdd
    } = this.props;

    return (
      <section>
        <h1>{name}</h1>
        <input
          placeholder="Title"
          value={title}
          onChange={onChangeTitle}
        />
        <input
          placeholder="Summary"
          value={summary}
          onChange={onChangeSummary}
        />
        <button onClick={onClickAdd}>Add</button>
      </section>
    );
  }
}
