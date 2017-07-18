'use strict';

module.exports = exports = {};

// Map
exports.map = (arr, callback) => Array.prototype.map.call(arr, callback);

// Filter
exports.filter = (arr, callback) => Array.prototype.filter.call(arr, callback);
