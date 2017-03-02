/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule RelayFragmentPointer
 * 
 */

'use strict';

/**
 * Fragment pointers encapsulate the fetched data for a fragment reference. They
 * are opaque tokens that are used by Relay containers to read data that is then
 * passed to the underlying React component.
 *
 * @internal
 */
var RelayFragmentPointer = {
  addFragment: function addFragment(record, fragment) {
    var fragmentMap = record.__fragments__;
    if (fragmentMap == null) {
      fragmentMap = record.__fragments__ = {};
    }
    require('fbjs/lib/invariant')(typeof fragmentMap === 'object' && fragmentMap != null, 'RelayFragmentPointer: Expected record to contain a fragment map, got ' + '`%s` for record `%s`.', fragmentMap, record.__dataID__);
    var fragmentID = fragment.getConcreteFragmentID();
    var variableList = fragmentMap[fragmentID];
    if (variableList == null) {
      variableList = fragmentMap[fragmentID] = [];
    }
    require('fbjs/lib/invariant')(Array.isArray(variableList), 'RelayFragmentPointer: Expected record to contain a fragment/variable ' + 'map, got `%s` for record `%s`.', variableList, record.__dataID__);
    variableList.push(fragment.getVariables());
  },


  /**
   * Returns true if the concrete fragment is included in the fragment pointer
   * results, regardless of the variables.
   */
  hasConcreteFragment: function hasConcreteFragment(record, fragment) {
    var fragmentMap = record.__fragments__;
    if (typeof fragmentMap === 'object' && fragmentMap != null) {
      var _fragmentID = fragment.getConcreteFragmentID();
      return fragmentMap.hasOwnProperty(_fragmentID);
    }
    return false;
  },


  /**
   * Returns true if the combination of concrete fragment + variables is
   * included in the fragment pointer results.
   */
  hasFragment: function hasFragment(record, fragment) {
    var variableList = RelayFragmentPointer.getFragmentVariables(record, fragment);
    if (variableList != null) {
      return variableList.some(function (vars) {
        return require('fbjs/lib/areEqual')(vars, fragment.getVariables());
      });
    }
    return false;
  },
  getVariablesForID: function getVariablesForID(record, fragmentID) {
    var fragmentMap = record.__fragments__;
    if (typeof fragmentMap === 'object' && fragmentMap != null) {
      var variables = fragmentMap[fragmentID];
      if (variables) {
        require('fbjs/lib/invariant')(Array.isArray(variables) && variables.length === 1, 'RelayFragmentPointer: Expected an array with at most one set of ' + 'variables per concrete fragment, got %s.', variables);
        return variables[0];
      }
    }
    return null;
  },


  /**
   * Returns the list of variables whose results are available for the given
   * concrete fragment.
   */
  getFragmentVariables: function getFragmentVariables(record, fragment) {
    var fragmentMap = record.__fragments__;
    if (typeof fragmentMap === 'object' && fragmentMap != null) {
      var _fragmentID2 = fragment.getConcreteFragmentID();
      /* $FlowFixMe(>=0.36.0) Flow error detected during
       * the deploy of Flow v0.36.0. To see the error, remove this comment and
       * run Flow */
      return fragmentMap[_fragmentID2];
    }
    return null;
  },
  create: function create(dataID, fragment) {
    var record = require('./RelayRecord').create(dataID);
    RelayFragmentPointer.addFragment(record, fragment);
    return record;
  },
  createForRoot: function createForRoot(store, query) {
    var fragment = getRootFragment(query);
    if (!fragment) {
      return null;
    }
    var storageKey = query.getStorageKey();
    var pointers = [];
    require('./forEachRootCallArg')(query, function (_ref) {
      var identifyingArgKey = _ref.identifyingArgKey;

      var dataID = store.getDataID(storageKey, identifyingArgKey);
      if (dataID == null) {
        pointers.push(null);
      } else {
        pointers.push(RelayFragmentPointer.create(dataID, fragment));
      }
    });
    // Distinguish between singular/plural queries.
    var identifyingArg = query.getIdentifyingArg();
    var identifyingArgValue = identifyingArg && identifyingArg.value || null;
    if (Array.isArray(identifyingArgValue)) {
      return pointers;
    }
    return pointers[0];
  }
};

function getRootFragment(query) {
  var batchCall = query.getBatchCall();
  if (batchCall) {
    require('fbjs/lib/invariant')(false, 'Queries supplied at the root cannot have batch call variables. Query ' + '`%s` has a batch call variable, `%s`.', query.getName(), batchCall.refParamName);
  }
  var fragment = void 0;
  query.getChildren().forEach(function (child) {
    if (child instanceof require('./RelayQuery').Fragment) {
      require('fbjs/lib/invariant')(!fragment, 'Queries supplied at the root should contain exactly one fragment ' + '(e.g. `${Component.getFragment(\'...\')}`). Query `%s` contains ' + 'more than one fragment.', query.getName());
      fragment = child;
    } else if (child instanceof require('./RelayQuery').Field) {
      require('fbjs/lib/invariant')(child.isGenerated(), 'Queries supplied at the root should contain exactly one fragment ' + 'and no fields. Query `%s` contains a field, `%s`. If you need to ' + 'fetch fields, declare them in a Relay container.', query.getName(), child.getSchemaName());
    }
  });
  return fragment;
}

module.exports = RelayFragmentPointer;