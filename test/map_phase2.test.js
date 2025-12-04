import { expect } from "chai";
import map from "../src/map.js";

describe("map – tests from phase 2", () => {

  // -------------------------------
  // POSITIVE TEST CASES
  // -------------------------------
  describe("Positive cases", () => {

    it("should apply callback to each element", () => {
      expect(map([1, 2, 3], (x) => x * 2)).to.deep.equal([2, 4, 6]);
    });

    it("should return an empty array when the input array is empty", () => {
      expect(map([], (x) => x + 1)).to.deep.equal([]);
    });
    
    it("should map product objects to their names", () => {
      expect(map([{name:'Bread'}, {name:'Milk'}], (p) => p.name)).to.deep.equal(['Bread', 'Milk']);
    });
    
    it("should handle missing fields in objects gracefully", () => {
      expect(map([{name:'Bread'}, {}], (p) => p.name || 'Unknown')).to.deep.equal(['Bread', 'Unknown']);
    });
    
    it("should map items into objects when callback returns object", () => {
      expect(map([1], (x) => ({value: x}))).to.deep.equal([{value:1}]);
    });
    
    it("should map products to uppercase", () => {
      expect(map(['bread', 'milk'], str => str.toUpperCase())).to.deep.equal(['BREAD', 'MILK']);
    });
    
    it("should pass index correctly", () => {
      expect(map([10, 20, 30], (val, index) => index)).to.deep.equal([0, 1, 2]);
    });
    
    it("should pass full array to callback", () => {
      expect(map([1, 2, 3], (val, index, arr) => arr.length)).to.deep.equal([3, 3, 3]);
    });
    
    it("should return [undefined, undefined] with array as [1, 2] and iteratee as (x) => undefined", () => {
      expect(map([1, 2], (x) => undefined)).to.deep.equal([undefined, undefined]);
    });    

    it("should return ['h','e','l','l','o'] with array as string 'hello' (array-like) and iteratee as (x) => x", () => {
      expect(map('hello', (x) => x)).to.deep.equal(['h','e','l','l','o']);
    });    
  });


  // -------------------------------
  // NEGATIVE TEST CASES
  // -------------------------------
  describe("Negative cases", () => {
    
    it("should return an empty array for null input", () => {
      expect(map(null, (x) => x )).to.deep.equal([]);
    });
    
    it("should throw TypeError when iteratee is not a function", () => {
      expect(() => map([1, 2, 3], null)).to.throw(TypeError);
    });    
  });


  // -------------------------------
  // BOUNDARY TEST CASES
  // -------------------------------
  describe("Boundary cases", () => {

    it("should return same size array with a large array as new Array(100000).fill(1) and iteratee as (x) => x", () => {
      expect((map(new Array(100000).fill(1), (x) => x)).length).to.equal(100000);
    });
    
    it("should handle a single-element array", () => {
      expect(map([42], (x) => x + 1)).to.deep.equal([43]);
    });    
  });  

});  


