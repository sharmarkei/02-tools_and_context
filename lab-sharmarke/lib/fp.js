'use strict';

module.exports = exports = {};

// Map
exports.map = (arr, callback) => Array.prototype.map.call(arr, callback);

// Filter
exports.filter = (arr, callback) => Array.prototype.filter.call(arr, callback);

// Reduce
exports.reduce = (arr, callback, init = 0) => Array.prototype.reduce.call(arr, callback, init);

//Concat
exports.concat = (arr1, arr2) => Array.prototype.reduce.call(arr, callback, init);

//Splice
exports.splice = (arr, start, deleteCount, item) => Array.prototype.splice.call(arr, start, deleteCount, item);
