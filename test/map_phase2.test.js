import { expect } from "chai";
import map from "../src/map.js";

describe("map – tests from phase 2", () => {

  // -------------------------------
  // POSITIVE TEST CASES
  // -------------------------------
  describe("Positive cases", () => {

    it("should return [2, 4, 6] with array as [1, 2, 3] and iteratee as (x) => x * 2", () => {
      expect(map([1, 2, 3], (x) => x * 2)).to.deep.equal([2, 4, 6]);
    });

    it("should return [] with array as [] and iteratee as (x) => x + 1", () => {
      expect(map([], (x) => x + 1)).to.deep.equal([]);
    });
    
    it("should return ['Bread', 'Milk'] with array as [{name:'Bread'}, {name:'Milk'}] and iteratee as (p) => p.name", () => {
      expect(map([{name:'Bread'}, {name:'Milk'}], (p) => p.name)).to.deep.equal(['Bread', 'Milk']);
    });
    
    it("should return ['Bread', 'Unknown'] with array as [{name:'Bread'}, {}] and iteratee as (p) => p.name || 'Unknown'", () => {
      expect(map([{name:'Bread'}, {}], (p) => p.name || 'Unknown')).to.deep.equal(['Bread', 'Unknown']);
    });
    
    it("should return [{value:1}] with array as [1] and iteratee as (x) => ({value: x})", () => {
      expect(map([1], (x) => ({value: x}))).to.deep.equal([{value:1}]);
    });
    
    it("should return ['BREAD', 'MILK'] with array as ['bread', 'milk'] and iteratee as str => str.toUpperCase()", () => {
      expect(map(['bread', 'milk'], str => str.toUpperCase())).to.deep.equal(['BREAD', 'MILK']);
    });
    
    it("should return [0, 1, 2] with array as [10, 20, 30] and iteratee as (val, index) => index", () => {
      expect(map([10, 20, 30], (val, index) => index)).to.deep.equal([0, 1, 2]);
    });
    
    it("should return [3, 3, 3] with array as [1, 2, 3] and iteratee as (val, index, arr) => arr.length", () => {
      expect(map([1, 2, 3], (val, index, arr) => arr.length)).to.deep.equal([3, 3, 3]);
    });    
  });


  // -------------------------------
  // NEGATIVE TEST CASES
  // -------------------------------
  describe("Negative cases", () => {

    it("should return [undefined, undefined] with array as [1, 2] and iteratee as (x) => undefined", () => {
      expect(map([1, 2], (x) => undefined)).to.deep.equal([undefined, undefined]);
    });
    
    it("should return [] with array as null and iteratee as (x) => x", () => {
      expect(map(null, (x) => x )).to.deep.equal([]);
    });
    
    it("should return ['h','e','l','l','o'] with array as 'hello' and iteratee as (x) => x", () => {
      expect(map('hello', (x) => x)).to.deep.equal(['h','e','l','l','o']);
    });
    
    it("should throw TypeError with array as [1, 2, 3] and iteratee as null", () => {
      expect(() => map([1, 2, 3], null)).to.throw(TypeError);
    });    
  });


  // -------------------------------
  // BOUNDARY TEST CASES
  // -------------------------------
  describe("Boundary cases", () => {

    it("should return same size array with array as new Array(100000).fill(1) and iteratee as (x) => x", () => {
      expect((map(new Array(100000).fill(1), (x) => x)).length).to.equal(100000);
    });
    
    it("should return [43] with array as [42] and iteratee as (x) => x + 1", () => {
      expect(map([42], (x) => x + 1)).to.deep.equal([43]);
    });    
  });  

});  


