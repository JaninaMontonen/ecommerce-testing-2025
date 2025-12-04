import { expect } from "chai";
import clamp from "../src/clamp.js";

describe("clamp – tests from phase 2", () => {

  // -------------------------------
  // POSITIVE TEST CASES
  // -------------------------------
  describe("Positive cases", () => {

    it("should return the value when it is within the range", () => {
      expect(clamp(5, 0, 100)).to.equal(5);
    });

    it("should clamp convertable numeric strings correctly", () => {
      expect(clamp('5', 0, 100)).to.equal(5);
      expect(clamp(5, '0', '100')).to.equal(5);
    });    

    it("should clamp floats correctly", () => {
      expect(clamp(3.7, 0, 3.5)).to.equal(3.5);
    })    

    it("should treat null as 0 and clamp correctly", () => {
      expect(clamp(null, 5, 100)).to.equal(5);
    });     
  });


  // -------------------------------
  // NEGATIVE TEST CASES
  // -------------------------------
  describe("Negative cases", () => {

    it("should treat NaN as 0 and clamp to lower bound", () => {
      expect(clamp(NaN, 0, 100)).to.equal(0);
    });

    it("should treat undefined as NaN (0) and clamp to lower bound", () => {
      expect(clamp(undefined, 1, 5)).to.equal(1);
    });         
    
    it("should convert non-numeric value to NaN (0) and clamp to lower bound", () => {
      expect(clamp('5 pcs', 0, 100)).to.equal(0);
    });     
    
    it("should return 100 for an invalid range", () => {
      expect(clamp(5, 100, 0)).to.equal(100);
    });    

    it("should convert non-numeric boundary value to NaN (0) and return the value ", () => {
      expect(clamp(5, 'a', 10)).to.equal(5);
    });      
  });


  // -------------------------------
  // BOUNDARY TEST CASES
  // -------------------------------
  describe("Boundary cases", () => {

    it("should clamp to lower bound when the value is equal or below it", () => {
      expect(clamp(0, 0, 100)).to.equal(0);
      expect(clamp(-5, 0, 100)).to.equal(0);
    });

    it("should clamp to upper value when the value is equal or exceeds it", () => {
      expect(clamp(100, 0, 100)).to.equal(100);
      expect(clamp(999999, 0, 100)).to.equal(100);
    });    

    it("should work correctly when the bound is fixed", () => {
      expect(clamp(10, 5, 5)).to.equal(5);
      expect(clamp(0, 0, 0)).to.equal(0);
    });       
  });

});