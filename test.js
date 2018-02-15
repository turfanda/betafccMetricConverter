const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it
let server = require("./server");

describe('Unit Test', function() {
  describe('Parse Input', function() {
      it('should Parse', function(done) {
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
        done();
      });
          it('should Pass', function(done) {
      assert.deepEqual(server.calcOutput('gal'),    {initNum: 1,   initUnit: 'gal',outNum:3.78541, outUnit:"l"});
      assert.deepEqual(server.calcOutput('lbs'),    {initNum: 1,   initUnit: 'lbs',outNum:0.45359, outUnit:"kg"});
      assert.deepEqual(server.calcOutput('mi'),     {initNum: 1,   initUnit: 'mi' ,outNum:1.60934, outUnit:"km"});
      assert.deepEqual(server.calcOutput('l'),      {initNum: 1,   initUnit: 'l'  ,outNum: outUnit:"gal"});
      assert.deepEqual(server.calcOutput('kg'),     {initNum: 1,   initUnit: 'kg' ,outNum:2.20462, outUnit:"lbs"});
      assert.deepEqual(server.calcOutput('km'),     {initNum: 1,   initUnit: 'km' ,outNum:0.62137, outUnit:"mi"});
      assert.deepEqual(server.calcOutput('1.5gal'), {initNum: 1.5, initUnit: 'gal',outNum:5.67812, outUnit:"l"});
      assert.deepEqual(server.calcOutput('1.5km'),  {initNum: 1.5, initUnit: 'km' ,outNum:0.93206, outUnit:"mi"});
      assert.deepEqual(server.calcOutput('5/2kg'),  {initNum: 2.5, initUnit: 'kg' ,outNum:5.51156 outUnit:"lbs"});
      assert.deepEqual(server.calcOutput('6/3km'),  {initNum: 2,   initUnit: 'km' ,outNum: outUnit:"mi"});
        done();
      });
    });
  });