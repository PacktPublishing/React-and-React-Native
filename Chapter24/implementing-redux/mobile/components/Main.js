import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Article from './Article';
import Articles from './Articles'; // eslint-disable-line import/no-unresolved

const componentMap = {
  articles: Articles,
  article: Article,
};

const Main = ({ component }) => {
  const Component = componentMap[component];
  return (<Component />);
};

Main.propTypes = {
  component: PropTypes.string.isRequired,
};

export default connect(
  state => state.get('Main').toJS()
)(Main);
