/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule RelayShallowMock
 * 
 */

/**
 * @description
 * RelayShallowMock allows testing Relay components in isolation.
 * Every Relay container will only render the name of the component it contains.
 * Adds `unwrap` to the container that returns the component to test.
 *
 * @example
 * jest.mock('Relay', () => require('RelayShallowMock'));
 * const renderer = require('ReactTestRenderer');
 * const MyContainer = require('MyContainer');
 *
 * test('the wrapped component', () => {
 *   const MyComponent = MyContainer.unwrap();
 *   // Here I can test the component by passing the properties I want to test
 *   // any containers inside the component will render as:
 *   // <RelayContainer>Component Name</RelayContainer>
 *   expect(
 *     renderer.create(
 *       <MyComponent myProp={{}} myOtherProp={{}} />
 *     ).toMatchSnapshot()
 *   );
 * });
 *
 */

'use strict';

var _extends3 = _interopRequireDefault(require('babel-runtime/helpers/extends'));

var _classCallCheck3 = _interopRequireDefault(require('babel-runtime/helpers/classCallCheck'));

var _possibleConstructorReturn3 = _interopRequireDefault(require('babel-runtime/helpers/possibleConstructorReturn'));

var _inherits3 = _interopRequireDefault(require('babel-runtime/helpers/inherits'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Relay = require.requireActual('./Relay');

var RelayShallowMock = {
  createContainer: function createContainer(component, spec) {
    return function (_React$Component) {
      (0, _inherits3['default'])(_class, _React$Component);

      function _class() {
        (0, _classCallCheck3['default'])(this, _class);
        return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
      }

      _class.prototype.render = function render() {
        return require('react').createElement('Relay(' + (component.displayName || component.name || 'Unknown') + ')');
      };

      _class.unwrap = function unwrap() {
        return component;
      };

      return _class;
    }(require('react').Component);
  }
};

module.exports = (0, _extends3['default'])({}, Relay, RelayShallowMock);