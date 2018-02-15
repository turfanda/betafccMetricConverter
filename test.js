const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
let server = require("/server");

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});