import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity
} from 'react-native';

import styles from './styles';

// The "onScroll" handler. This is actually
// a higher-order function that retuns the
// actual handler. When the x offset is 200,
// when know that the component has been
// swiped and can call "onSwipe()".
const onScroll = onSwipe => e =>
  e.nativeEvent.contentOffset.x === 200 && onSwipe();

// The static properties used by the "<ScrollView>"
// component.
const scrollProps = {
  horizontal: true,
  pagingEnabled: true,
  showsHorizontalScrollIndicator: false,
  scrollEventThrottle: 10
};

const Swipeable = ({ onSwipe, name }) => (
  <View style={styles.swipeContainer}>
    {/* The "<View>" that wraps this "<ScrollView>"
         is necessary to make scrolling work properly. */}
    <ScrollView {...scrollProps} onScroll={onScroll(onSwipe)}>
      {/* Not strictly necessary, but "<TouchableOpacity>"
           does provide the user with meaningful feedback
           when they initially press down on the text. */}
      <TouchableOpacity>
        <View style={styles.swipeItem}>
          <Text style={styles.swipeItemText}>{name}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.swipeBlank} />
    </ScrollView>
  </View>
);

Swipeable.propTypes = {
  onSwipe: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default Swipeable;
