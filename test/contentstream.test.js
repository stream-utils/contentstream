/**!
 * contentstream - test/contentstream.test.js
 *
 * Copyright(c) 2014 fengmk2 and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 */

"use strict";

/**
 * Module dependencies.
 */

var should = require('should');
var readall = require('readall');
var ContentStream = require('../');

describe('contentstream.test.js', function () {
  it('should pipe string', function (done) {
    readall(ContentStream('hello stream'), function (err, data) {
      should.not.exist(err);
      data.toString().should.equal('hello stream');
      done();
    });
  });
});
