import React from 'react';
import {
  View,
} from 'react-native';

import Title from './Title';
import Categories from './Categories';
import ArticleList from './ArticleList';

const Articles = () => (
  <Categories>
    <View>
      <Title />
      <ArticleList />
    </View>
  </Categories>
);

export default Articles;
