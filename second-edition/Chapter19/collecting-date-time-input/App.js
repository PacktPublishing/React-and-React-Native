import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './styles';

// Imports our own platform-independent "DatePicker"
// and "TimePicker" components.
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';

export default class CollectingDateTimeInput extends Component {
  state = {
    date: new Date(),
    time: new Date()
  };

  render() {
    return (
      <View style={styles.container}>
        <DatePicker
          label="Pick a date, any date:"
          date={this.state.date}
          onDateChange={date => this.setState({ date })}
        />
        <TimePicker
          label="Pick a time, any time:"
          date={this.state.time}
          onTimeChange={time => this.setState({ time })}
        />
      </View>
    );
  }
}
