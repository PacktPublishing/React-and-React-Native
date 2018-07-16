import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { fromJS } from 'immutable';

import styles from './styles';
import Select from './Select';

export default class SelectingOptions extends Component {
  // The state is a collection of "sizes" and
  // "garments". At any given time there can be
  // selected size and garment.
  state = {
    data: fromJS({
      sizes: [
        { label: '', value: null },
        { label: 'S', value: 'S' },
        { label: 'M', value: 'M' },
        { label: 'L', value: 'L' },
        { label: 'XL', value: 'XL' }
      ],
      selectedSize: null,
      garments: [
        { label: '', value: null, sizes: ['S', 'M', 'L', 'XL'] },
        { label: 'Socks', value: 1, sizes: ['S', 'L'] },
        { label: 'Shirt', value: 2, sizes: ['M', 'XL'] },
        { label: 'Pants', value: 3, sizes: ['S', 'L'] },
        { label: 'Hat', value: 4, sizes: ['M', 'XL'] }
      ],
      availableGarments: [],
      selectedGarment: null,
      selection: ''
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

  render() {
    const {
      sizes,
      selectedSize,
      availableGarments,
      selectedGarment,
      selection
    } = this.data.toJS();

    // Renders two "<Select>" components. The first
    // one is a "size" selector, and this changes
    // the available garments to select from.
    // The second selector changes the "selection"
    // state to include the selected size
    // and garment.
    return (
      <View style={styles.container}>
        <Select
          label="Size"
          items={sizes}
          selectedValue={selectedSize}
          onValueChange={size => {
            this.data = this.data
              .set('selectedSize', size)
              .set('selectedGarment', null)
              .set(
                'availableGarments',
                this.data
                  .get('garments')
                  .filter(i => i.get('sizes').includes(size))
              );
          }}
        />
        <Select
          label="Garment"
          items={availableGarments}
          selectedValue={selectedGarment}
          onValueChange={garment => {
            this.data = this.data.set('selectedGarment', garment).set(
              'selection',
              this.data.get('selectedSize') +
                ' ' +
                this.data
                  .get('garments')
                  .find(i => i.get('value') === garment)
                  .get('label')
            );
          }}
        />
        <Text style={styles.selection}>{selection}</Text>
      </View>
    );
  }
}
