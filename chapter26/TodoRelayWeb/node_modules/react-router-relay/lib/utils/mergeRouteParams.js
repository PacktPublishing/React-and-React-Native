'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = mergeRouteParams;

var _getRouteParams = require('react-router/lib/getRouteParams');

var _getRouteParams2 = _interopRequireDefault(_getRouteParams);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mergeRouteParams(prevParams, route, routerProps) {
  var params = (0, _extends3.default)({}, prevParams, (0, _getRouteParams2.default)(route, routerProps.params));

  if (!route.prepareParams) {
    return params;
  }

  // Depending on how we get here, routerProps won't always be the same, but it
  // will always have location, params, and routes, which are all that could
  // possibly be relevant here. Anybody using anything else from routerProps
  // deserves whatever they get.
  return route.prepareParams(params, routerProps);
}
module.exports = exports['default'];