'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RelayRouterContext = require('./RelayRouterContext');

var _RelayRouterContext2 = _interopRequireDefault(_RelayRouterContext);

var _RouteContainer = require('./RouteContainer');

var _RouteContainer2 = _interopRequireDefault(_RouteContainer);

var _getRouteQueries = require('./utils/getRouteQueries');

var _getRouteQueries2 = _interopRequireDefault(_getRouteQueries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  renderRouterContext: function renderRouterContext(child, props) {
    return _react2.default.createElement(
      _RelayRouterContext2.default,
      props,
      child
    );
  },

  renderRouteComponent: function renderRouteComponent(child, props) {
    /* eslint-disable react/prop-types */
    var key = props.key;
    var route = props.route;
    /* eslint-enable react/prop-types */

    var routeQueries = (0, _getRouteQueries2.default)(route, props);
    var queries = key ? routeQueries && routeQueries[key] : routeQueries;
    if (!queries) {
      return child;
    }

    return _react2.default.createElement(
      _RouteContainer2.default,
      { queries: queries, routerProps: props },
      child
    );
  }
};
module.exports = exports['default'];