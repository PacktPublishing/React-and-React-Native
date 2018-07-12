import React, { Component } from 'react';
import {
  AppRegistry,
  View,
} from 'react-native';

import styles from './styles';

// Imports our own platform-independent "DatePicker"
// and "TimePicker" components.
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';

class CollectingDateTimeInput extends Component {
  state = {
    date: new Date(),
    time: new Date(),
  }

  setDate = (date) => {
    this.setState({ date });
  }

  setTime = (time) => {
    this.setState({ time });
  }

  render() {
    const {
      setDate,
      setTime,
      state: {
        date,
        time,
      },
    } = this;

    // Pretty self-explanatory - renders a "<DatePicker>"
    // and a "<TimePicker>". The date/time comes from the
    // state of this component and when the user makes a
    // selection, the "setDate()" or "setTime()" function
    // is called.
    return (
      <View style={styles.container}>
        <DatePicker
          label="Pick a date, any date:"
          date={date}
          onDateChange={setDate}
        />
        <TimePicker
          label="Pick a time, any time:"
          date={time}
          onTimeChange={setTime}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent(
  'CollectingDateTimeInput',
  () => CollectingDateTimeInput
);
