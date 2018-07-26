import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  FlatList,
  AsyncStorage
} from 'react-native';
import { fromJS } from 'immutable';

import styles from './styles';
import Button from './Button';

export default class StoringData extends Component {
  // The initial state of this component
  // consists of the current "key" and "value"
  // that the user is entering. It also has
  // a "source" for the list view to display
  // everything that's been stored.
  state = {
    data: fromJS({
      key: null,
      value: null,
      source: []
    })
  };

  // Getter for "Immutable.js" state data...
  get data() {
    return this.state.data;
  }

  // Setter for "Immutable.js" state data...
  set data(data) {
    this.setState({ data });
  }

  // Uses "AsyncStorage.setItem()" to store
  // the current "key" and "value" states.
  // When this completes, we can delete
  // "key" and "value" and reload the item list.
  setItem = () =>
    AsyncStorage.setItem(this.data.get('key'), this.data.get('value'))
      .then(() => {
        this.data = this.data.delete('key').delete('value');
      })
      .then(() => this.loadItems());

  // Uses "AsyncStorage.clear()" to empty any stored
  // values. Then, it loads the empty list of
  // items to clear the item list on the screen.
  clearItems = () =>
    AsyncStorage.clear().then(() => this.loadItems());

  // This method is async because awaits on the
  // data store keys and values, which are two
  // dependent async calls.
  async loadItems() {
    const keys = await AsyncStorage.getAllKeys();
    const values = await AsyncStorage.multiGet(keys);

    this.data = this.data.set('source', fromJS(values));
  }

  // Load any existing items that have
  // already been stored when the app starts.
  componentDidMount() {
    this.loadItems();
  }

  render() {
    // The state that we need...
    const { source, key, value } = this.data.toJS();

    return (
      <View style={styles.container}>
        <Text>Key:</Text>
        <TextInput
          style={styles.input}
          value={key}
          onChangeText={v => {
            this.data = this.data.set('key', v);
          }}
        />
        <Text>Value:</Text>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={v => {
            this.data = this.data.set('value', v);
          }}
        />
        <View style={styles.controls}>
          <Button label="Add" onPress={this.setItem} />
          <Button label="Clear" onPress={this.clearItems} />
        </View>
        <View style={styles.list}>
          <FlatList
            data={source.map(([key, value]) => ({
              key: key.toString(),
              value
            }))}
            renderItem={({ item: { value, key } }) => (
              <Text>
                {value} ({key})
              </Text>
            )}
          />
        </View>
      </View>
    );
  }
}
