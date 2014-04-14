/**!
 * contentstream - index.js
 *
 * Copyright(c) fengmk2 and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 */

'use strict';

/**
 * Module dependencies.
 */

var Readable = require('stream').Readable;
var util = require('util');

module.exports = ContentStream;

function ContentStream(obj, options) {
  Readable.call(this, options);
  this._obj = obj;
}

ContentStream.prototype._read = function (n) {
  var obj = this._obj;
  if (typeof obj === 'string') {
    this.push(new Buffer(obj));
  } else if (Buffer.isBuffer(obj)) {
    this.push(obj);
  } else {
    this.push(new Buffer(JSON.stringify(obj)));
  }
  this.push(null);
};
