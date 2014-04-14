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
  it('should pipe String', function (done) {
    readall(ContentStream('hello stream'), function (err, data) {
      should.not.exist(err);
      data.toString().should.equal('hello stream');
      done();
    });
  });

  it('should pipe Buffer', function (done) {
    readall(new ContentStream(new Buffer('hello stream')), function (err, data) {
      should.not.exist(err);
      data.toString().should.equal('hello stream');
      done();
    });
  });

  it('should pipe Number', function (done) {
    readall(new ContentStream(1024), function (err, data) {
      should.not.exist(err);
      data.should.be.a.Buffer;
      JSON.parse(data).should.equal(1024);
      data.toString().should.equal('1024');
      done();
    });
  });

  it('should pipe Object', function (done) {
    readall(new ContentStream({s: 'str', n: 123, d: new Date('1984-10-10')}), function (err, data) {
      should.not.exist(err);
      data.should.be.a.Buffer;
      JSON.parse(data).should.eql({ s: 'str', n: 123, d: '1984-10-10T00:00:00.000Z' });
      done();
    });
  });

  it('should pipe null', function (done) {
    readall(ContentStream(null), function (err, data) {
      should.not.exist(err);
      data.toString().should.equal('null');
      done();
    });
  });

  it('should pipe undefined', function (done) {
    readall(ContentStream(), function (err, data) {
      should.not.exist(err);
      data.toString().should.equal('undefined');
      done();
    });
  });
});
