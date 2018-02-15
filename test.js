const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it
let server = require("./server");

describe('Unit Test', function() {
  describe('Parse Input', function() {
      describe('', function() {
      assert.deepEqual(server.parseUnit('1gal'), {value: 1, type: 'gal'});
      assert.deepEqual(server.parseUnit('1lbs'), {value: 1, type: 'lbs'});
      assert.deepEqual(server.parseUnit('1mi'),  {value: 1, type: 'mi'});
      assert.deepEqual(server.parseUnit('1l'),   {value: 1, type: 'l'});
      assert.deepEqual(server.parseUnit('1kg'),  {value: 1, type: 'kg'});
      assert.deepEqual(server.parseUnit('1km'),  {value: 1, type: 'km'});
      assert.deepEqual(server.parseUnit('1.5gal'), {value: 1.5, type: 'gal'});
      assert.deepEqual(server.parseUnit('1.5lbs'), {value: 1.5, type: 'lbs'});
      assert.deepEqual(server.parseUnit('1.5mi'),  {value: 1.5, type: 'mi'});
      assert.deepEqual(server.parseUnit('1.5l'),   {value: 1.5, type: 'l'});
      assert.deepEqual(server.parseUnit('1.5kg'),  {value: 1.5, type: 'kg'});
      assert.deepEqual(server.parseUnit('1.5km'),  {value: 1.5, type: 'km'});
      });
    });
  });