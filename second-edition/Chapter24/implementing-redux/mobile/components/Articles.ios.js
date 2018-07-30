import React from 'react';
import { View } from 'react-native';

import Title from './Title';
import Categories from './Categories';
import ArticleList from './ArticleList';

const Articles = props => (
  <Categories {...props}>
    <View>
      <Title />
      <ArticleList {...props} />
    </View>
  </Categories>
);

export default Articles;
