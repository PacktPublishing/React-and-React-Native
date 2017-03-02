/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule RelayEventStatus
 * 
 */

'use strict';

var _extends3 = _interopRequireDefault(require('babel-runtime/helpers/extends'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Parses Relay ready state events so users of RelayRenderer can have more fine grain control in the
 * relayRender callback.
 */
module.exports = {
  parseEvents: function parseEvents(events) {
    return events.reduce(function (intermediateStatus, event) {
      switch (event.type) {
        case 'CACHE_RESTORE_FAILED':
          return (0, _extends3['default'])({}, intermediateStatus, {
            error: true,
            loadingCache: false
          });
        case 'NETWORK_QUERY_ERROR':
          return (0, _extends3['default'])({}, intermediateStatus, {
            error: true,
            loadingNetwork: false
          });
        case 'NETWORK_QUERY_START':
          return (0, _extends3['default'])({}, intermediateStatus, {
            error: false,
            loadingNetwork: true,
            ready: false
          });
        case 'CACHE_RESTORE_START':
          return (0, _extends3['default'])({}, intermediateStatus, {
            error: false,
            loadingCache: true,
            ready: false
          });
        case 'CACHE_RESTORED_REQUIRED':
        case 'NETWORK_QUERY_RECEIVED_REQUIRED':
        case 'NETWORK_QUERY_RECEIVED_ALL':
          return (0, _extends3['default'])({}, intermediateStatus, {
            error: false,
            loadingCache: false,
            ready: true
          });
        default:
          return intermediateStatus;
      }
    }, {
      error: false,
      loadingCache: false,
      loadingNetwork: false,
      ready: false
    });
  }
};