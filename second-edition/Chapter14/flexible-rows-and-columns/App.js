import React from 'react';
import { View, StatusBar } from 'react-native';

import styles from './styles';
import Row from './Row';
import Column from './Column';
import Box from './Box';

export default () => (
  <View style={styles.container}>
    <StatusBar hidden={false} />
    {/* This row contains two columns. The first column
        has boxes "#1" and "#2". They will be stacked on
        top of one another. The next column has boxes "#3"
        and "#4", which are also stacked on top of one
        another */}
    <Row>
      <Column>
        <Box>#1</Box>
        <Box>#2</Box>
      </Column>
      <Column>
        <Box>#3</Box>
        <Box>#4</Box>
      </Column>
    </Row>
    <Row>
      <Column>
        <Box>#5</Box>
        <Box>#6</Box>
      </Column>
      <Column>
        <Box>#7</Box>
        <Box>#8</Box>
      </Column>
    </Row>
    <Row>
      <Column>
        <Box>#9</Box>
        <Box>#10</Box>
      </Column>
      <Column>
        <Box>#11</Box>
        <Box>#12</Box>
      </Column>
    </Row>
  </View>
);
