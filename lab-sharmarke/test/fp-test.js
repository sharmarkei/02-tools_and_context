'use strict';

const expect  = require('chai').expect;
const fp = require('../lib/fp.js');

describe('Fp', () => {

  describe('#map', () => {
    it('should return 3,4,5,6,7', () => {
      let arr = [1,2,3,4,5];
      let result = fp.map(arr, n => n + 2);
      expect(result).to.deep.equal([3,4,5,6,7]);
    });

    it('should throw a missing name error', () => {
      let result = fp.map;
      expect(result).to.throw(Error);
    });
  });

  describe('#filter', () => {
    it('should return 1,2,3', () => {
      let arr = [1,2,3,4,5];
      let result = fp.filter(arr, n => n <= 3);
      console.log(result);
      expect(result).to.deep.equal([1,2,3]);
    });

    it('should throw a missing name error', () => {
      let result = fp.filter;
      expect(result).to.throw(Error);
    });
  });

  describe('#reduce', () => {
    it('should return 15', () => {
      let arr = [1,2,3,4,5];
      let result = fp.reduce(arr, (n,o) => n+o);
      expect(result).to.deep.equal(15);
    });

    it('should throw a missing name error', () => {
      let result = fp.reduce;
      expect(result).to.throw(Error);
    });
  });
  describe('#splice', () => {
    it('should fish' () => {
      let results = fp.splice([1, 2, 3, 'fish', 5], 3, 1, 4);
      expect(result).to.deep.equal(['fish']);
    });
  });
});
