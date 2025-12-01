import { expect } from "chai";
import toInteger from "../src/toInteger.js";

describe("toInteger – tests from phase 2", () => {

  // -------------------------------
  // POSITIVE TEST CASES
  // -------------------------------
  describe("Positive cases", () => {

    it("should return 2 for 2.1", () => {
      expect(toInteger(2.1)).to.equal(2);
    });

    it("should return -2 for -2.1", () => {
      expect(toInteger(-2.1)).to.equal(-2);
    });
    
    it("should return 2 for 2", () => {
      expect(toInteger(2)).to.equal(2);
    });
    
    it("should return 2 for ' 2.1 '", () => {
      expect(toInteger(' 2.1 ')).to.equal(2);
    });
    
    it("should return 0 for 0", () => {
      expect(toInteger(0)).to.equal(0);
    });   
    
    it("should return 0 for null", () => {
      expect(toInteger(null)).to.equal(0);
    });    
  });


  // -------------------------------
  // NEGATIVE TEST CASES
  // -------------------------------
  describe("Negative cases", () => {

    it("should return 0 for 'a1b2c3'", () => {
      expect(toInteger('a1b2c3')).to.equal(0);
    });
    
    it("should return 0 for {}", () => {
      expect(toInteger({})).to.equal(0);
    });  
    
    it("should return 0 for '2,1'", () => {
      expect(toInteger('2,1')).to.equal(0);
    });
    
    it("should return 0 for empty input", () => {
      expect(toInteger('')).to.equal(0);
    });    
    
    it("should return 0 for undefined", () => {
      expect(toInteger(undefined)).to.equal(0);
    });    
  });

  
  // -------------------------------
  // BOUNDARY TEST CASES
  // -------------------------------
  describe("Boundary cases", () => {

    it("should return 0 for Number.MIN_VALUE", () => {
      expect(toInteger(Number.MIN_VALUE)).to.equal(0);
    });

    it("should return 1.7976931348623157e+308 for Infinity", () => {
      expect(toInteger(Infinity)).to.equal(1.7976931348623157e+308);
    });    
  });

});