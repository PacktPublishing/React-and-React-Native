import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Picker,
  ListView,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { fromJS } from 'immutable';

import styles from './styles';
import iconNames from './icon-names.json';

class RenderingIcons extends Component {
  // The initial state consists of the "selected"
  // category, the "icons" JSON object, and the
  // "listSource" used to render the list view.
  state = {
    data: fromJS({
      selected: 'Web Application Icons',
      icons: iconNames,
      listSource: new ListView.DataSource({
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

  // Sets the "listSource" state based on the
  // "selected" icon state. Also sets the "selected"
  // state.
  updateListSource = (selected) => {
    this.data = this.data
      .update('listSource', listSource =>
        listSource.cloneWithRows(
          this.data
            .getIn(['icons', selected])
            .toJS()
        )
      )
      .set('selected', selected);
  }

  // Make sure the "listSource" is populated
  // before the first render.
  componentWillMount() {
    this.updateListSource(this.data.get('selected'));
  }

  render() {
    const {
      updateListSource,
    } = this;

    // Get the state that we need to render the icon
    // category picker and the list view with icons.
    const selected = this.data
      .get('selected');
    const categories = this.data
      .get('icons')
      .keySeq()
      .toJS();
    const listSource = this.data
      .get('listSource');

    return (
      <View style={styles.container}>
        <View style={styles.picker}>
          { /* Lets the user select a FontAwesome icon
               category. When the selection is changed,
               the list view is changed. */ }
          <Picker
            selectedValue={selected}
            onValueChange={updateListSource}
          >
            {categories.map(c => (
              <Picker.Item
                key={c}
                label={c}
                value={c}
              />
            ))}
          </Picker>
        </View>
        <ListView
          style={styles.icons}
          dataSource={listSource}
          renderRow={icon => (
            <View style={styles.item}>
              { /* The "<Icon>" component is used
                   to render the FontAwesome icon */ }
              <Icon
                name={icon}
                style={styles.itemIcon}
              />
              {/* Shows the icon class used */}
              <Text style={styles.itemText}>
                {icon}
              </Text>
            </View>
          )}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent(
  'RenderingIcons',
  () => RenderingIcons
);
