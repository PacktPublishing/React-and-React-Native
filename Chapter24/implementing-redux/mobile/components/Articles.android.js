import React from 'react';
import {
  View,
} from 'react-native';

import Categories from './Categories'; // eslint-disable-line import/no-unresolved
import ArticleList from './ArticleList';

const Articles = () => (
  <View>
    <Categories />
    <ArticleList />
  </View>
);

export default Articles;
