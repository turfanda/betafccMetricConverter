const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it
let server = require("./server");

describe('Unit Test', function() {
  describe('Parse Input', function() {
      it('should Pass', function() {
      assert.deepEqual(server.parseUnit('gal'), {initNum: 1, initUnit: 'gal',result:null});
      assert.deepEqual(server.parseUnit('lbs'), {initNum: 1, initUnit: 'lbs',result:null});
      assert.deepEqual(server.parseUnit('mi'),  {initNum: 1, initUnit: 'mi',result:null});
      assert.deepEqual(server.parseUnit('l'),   {initNum: 1, initUnit: 'l',result:null});
      assert.deepEqual(server.parseUnit('kg'),  {initNum: 1, initUnit: 'kg',result:null});
      assert.deepEqual(server.parseUnit('km'),  {initNum: 1, initUnit: 'km',result:null});
      assert.deepEqual(server.parseUnit('1.5gal'), {initNum: 1.5, initUnit: 'gal',result:null});
      assert.deepEqual(server.parseUnit('1.5lbs'), {initNum: 1.5, initUnit: 'lbs',result:null});
      assert.deepEqual(server.parseUnit('1.5mi'),  {initNum: 1.5, initUnit: 'mi',result:null});
      assert.deepEqual(server.parseUnit('1.5l'),   {initNum: 1.5, initUnit: 'l',result:null});
      assert.deepEqual(server.parseUnit('1.5kg'),  {initNum: 1.5, initUnit: 'kg',result:null});
      assert.deepEqual(server.parseUnit('1.5km'),  {initNum: 1.5, initUnit: 'km',result:null});
      assert.deepEqual(server.parseUnit('5/2kg'),  {initNum: 2.5, initUnit: 'kg',result:null});
      assert.deepEqual(server.parseUnit('6/3km'),  {initNum: 2, initUnit: 'km',result:null});
      });
    });
  });