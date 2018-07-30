import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import styles from '../styles';

const Title = ({ title }) => (
  <Text style={styles.title}>{title}</Text>
);

Title.propTypes = {
  title: PropTypes.string.isRequired
};

export default connect(state => state.get('Main').toJS())(Title);
