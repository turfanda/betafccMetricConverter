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
      server.listener.close();
        done();
      });
          it('should Pass', function(done) {
      assert.deepEqual(server.calcOutput({initNum: 1, initUnit: 'gal',result:null}),    {initNum: 1,   initUnit: 'gal',returnNum:3.78541, returnUnit:"L"  ,string:"1 galons converts to 3.78541 liters"});
      assert.deepEqual(server.calcOutput({initNum: 1, initUnit: 'lbs',result:null}),    {initNum: 1,   initUnit: 'lbs',returnNum:0.45359, returnUnit:"kg" ,string:"1 pounds converts to 0.45359 kilograms"});
      assert.deepEqual(server.calcOutput({initNum: 1, initUnit: 'mi',result:null}),     {initNum: 1,   initUnit: 'mi' ,returnNum:1.60934, returnUnit:"km" ,string:"1 miles converts to 1.60934 kilometers"});
      assert.deepEqual(server.calcOutput({initNum: 1, initUnit: 'l',result:null}),      {initNum: 1,   initUnit: 'l'  ,returnNum:0.26417, returnUnit:"gal",string:"1 liters converts to 0.26417 galons"});
      assert.deepEqual(server.calcOutput({initNum: 1, initUnit: 'kg',result:null}),     {initNum: 1,   initUnit: 'kg' ,returnNum:2.20462, returnUnit:"lbs",string:"1 kilograms converts to 2.20462 pounds"});
      assert.deepEqual(server.calcOutput({initNum: 1, initUnit: 'km',result:null}),     {initNum: 1,   initUnit: 'km' ,returnNum:0.62137, returnUnit:"mi" ,string:"1 kilometers converts to 0.62137 miles"});
      assert.deepEqual(server.calcOutput({initNum: 1.5, initUnit: 'gal',result:null}), {initNum: 1.5, initUnit: 'gal',returnNum:5.67812, returnUnit:"L"   ,string:"1.5 galons converts to 5.67812 liters"});
      assert.deepEqual(server.calcOutput( {initNum: 2.5, initUnit: 'kg',result:null}),  {initNum: 2.5, initUnit: 'kg' ,returnNum:5.51156, returnUnit:"lbs",string:"2.5 kilograms converts to 5.51156 pounds"});
      assert.deepEqual(server.calcOutput({initNum: 2, initUnit: 'km',result:null}),  {initNum: 2,   initUnit: 'km' ,returnNum:1.24275, returnUnit:"mi"    ,string:"2 kilometers converts to 1.24275 miles"});
               server.listener.close();   

        done();
      });
    });
  });