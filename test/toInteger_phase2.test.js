import { expect } from "chai";
import toInteger from "../src/toInteger.js";

describe("toInteger – tests from phase 2", () => {

  // -------------------------------
  // POSITIVE TEST CASES
  // -------------------------------
  describe("Positive cases", () => {

    it("should return the nearest integer toward zero for a float", () => {
      expect(toInteger(2.1)).to.equal(2);
      expect(toInteger(-2.1)).to.equal(-2);
    });
    
    it("should return the same integer if the input is already an integer", () => {
      expect(toInteger(2)).to.equal(2);
    });
    
    it("should return an integer for a numeric string", () => {
      expect(toInteger(' 2.1 ')).to.equal(2);
    });
    
    it("should return 0 for 0 and null", () => {
      expect(toInteger(0)).to.equal(0);
      expect(toInteger(null)).to.equal(0);
    });   
  });


  // -------------------------------
  // NEGATIVE TEST CASES
  // -------------------------------
  describe("Negative cases", () => {

    it("should return 0 for an input that cannot be converted to a number", () => {
      expect(toInteger('a1b2c3')).to.equal(0);
      expect(toInteger({})).to.equal(0);
    });
    
    it("should return 0 for a numeric string with comma decimal", () => {
      expect(toInteger('2,1')).to.equal(0);
    });
    
    it("should return 0 for an empty input", () => {
      expect(toInteger('')).to.equal(0);
    });    
    
    it("should return 0 for an undefined input", () => {
      expect(toInteger(undefined)).to.equal(0);
    });    
  });

  
  // -------------------------------
  // BOUNDARY TEST CASES
  // -------------------------------
  describe("Boundary cases", () => {

    it("should return 0 for the smallest possible numeric value (Number.MIN_VALUE)", () => {
      expect(toInteger(Number.MIN_VALUE)).to.equal(0);
    });

    it("should return a large integer (1.7976931348623157e+308) for Infinity", () => {
      expect(toInteger(Infinity)).to.equal(1.7976931348623157e+308);
    });    
  });

});