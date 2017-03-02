'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.base64 = base64;
exports.unbase64 = unbase64;
function base64(i) {
  return new Buffer(i, 'utf8').toString('base64');
}
/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

function unbase64(i) {
  return new Buffer(i, 'base64').toString('utf8');
}