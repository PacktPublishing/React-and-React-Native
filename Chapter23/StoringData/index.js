import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  ListView,
  AsyncStorage,
} from 'react-native';
import { fromJS } from 'immutable';

import styles from './styles';
import Button from './Button';

class StoringData extends Component {

  // The initial state of this component
  // consists of the current "key" and "value"
  // that the user is entering. It also has
  // a "source" for the list view to display
  // everything that's been stored.
  state = {
    data: fromJS({
      key: null,
      value: null,
      source: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      }),
    }),
  }

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
    AsyncStorage
      .setItem(
        this.data.get('key'),
        this.data.get('value')
      )
      .then(() => {
        this.data = this.data
          .delete('key')
          .delete('value');
      })
      .then(() => this.loadItems())

  // Uses "AsyncStorage.clear()" to empty any stored
  // values. Then, it loads the empty list of
  // items to clear the item list on the screen.
  clearItems = () =>
    AsyncStorage
      .clear()
      .then(() => this.loadItems())

  // This method is async because awaits on the
  // data store keys and values, which are two
  // dependent async calls.
  async loadItems() {
    const keys = await AsyncStorage.getAllKeys();
    const values = await AsyncStorage.multiGet(keys);

    this.data = this.data
      .update(
        'source',
        source => source.cloneWithRows(values)
      );
  }

  // Load any existing items that have
  // already been stored when the app starts.
  componentWillMount() {
    this.loadItems();
  }

  render() {
    // The methods that we need...
    const {
      setItem,
      clearItems,
    } = this;

    // The state that we need...
    const {
      source,
      key,
      value,
    } = this.data.toJS();

    return (
      <View style={styles.container}>
        <Text>Key:</Text>
        <TextInput
          style={styles.input}
          value={key}
          onChangeText={(v) => {
            this.data = this.data.set('key', v);
          }}
        />
        <Text>Value:</Text>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={(v) => {
            this.data = this.data.set('value', v);
          }}
        />
        <View style={styles.controls}>
          <Button
            label="Add"
            onPress={setItem}
          />
          <Button
            label="Clear"
            onPress={clearItems}
          />
        </View>
        <View style={styles.list}>
          <ListView
            enableEmptySections
            dataSource={source}
            renderRow={([k, v]) => (
              <Text>{v} ({k})</Text>
            )}
          />
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent(
  'StoringData',
  () => StoringData
);
