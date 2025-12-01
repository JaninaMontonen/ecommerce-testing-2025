import { expect } from "chai";
import clamp from "../src/clamp.js";

describe("clamp – tests from phase 2", () => {

  // -------------------------------
  // POSITIVE TEST CASES
  // -------------------------------
  describe("Positive cases", () => {

    it("should return 0 for (5, 0, 100)", () => {
      expect(clamp(5, 0, 100)).to.equal(0);
    });

    it("should return 0 for ('5', 0, 100)", () => {
      expect(clamp('5', 0, 100)).to.equal(0);
    });    

    it("should return 0 for (5, '0', '100')", () => {
      expect(clamp(5, '0', '100')).to.equal(0);
    });   

    it("should return 0 for (3.7, 0, 3.5)", () => {
      expect(clamp(3.7, 0, 3.5)).to.equal(0);
    })    

    it("should return 5 for (null, 5, 100)", () => {
      expect(clamp(null, 5, 100)).to.equal(5);
    });     
  });


  // -------------------------------
  // NEGATIVE TEST CASES
  // -------------------------------
  describe("Negative cases", () => {

    it("should return NaN for (NaN, 0, 100)", () => {
      expect(clamp(NaN, 0, 100)).to.be.NaN;
    });

    it("should return NaN for (undefined, 1, 5)", () => {
      expect(clamp(undefined, 1, 5)).to.be.NaN;
    });         
    
    it("should return NaN for ('5 pcs', 0, 100)", () => {
      expect(clamp('5 pcs', 0, 100)).to.be.NaN;
    });     
    
    it("should return 5 for (5, 100, 0)", () => {
      expect(clamp(5, 100, 0)).to.equal(5);
    });    

    it("should return 0 for (5, 'a', 10)", () => {
      expect(clamp(5, 'a', 10)).to.equal(0);
    });      
  });


  // -------------------------------
  // BOUNDARY TEST CASES
  // -------------------------------
  describe("Boundary cases", () => {

    it("should return 0 for (-5, 0, 100)", () => {
      expect(clamp(-5, 0, 100)).to.equal(0);
    });

    it("should return 0 for (999999, 0, 100)", () => {
      expect(clamp(999999, 0, 100)).to.equal(0);
    });    

    it("should return 0 for (0, 0, 100)", () => {
      expect(clamp(0, 0, 100)).to.equal(0);
    });
    
    it("should return 0 for (100, 0, 100)", () => {
      expect(clamp(100, 0, 100)).to.equal(0);
    });

    it("should return 5 for (10, 5, 5)", () => {
      expect(clamp(10, 5, 5)).to.equal(5);
    });     
    
    it("should return 0 for (0, 0, 0)", () => {
      expect(clamp(0, 0, 0)).to.equal(0);
    });    
  });

});