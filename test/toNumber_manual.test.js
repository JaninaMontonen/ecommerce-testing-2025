import { expect } from "chai";
import toNumber from "../src/toNumber.js";

describe("toNumber – manual tests", () => {

  // -------------------------------
  // POSITIVE TEST CASES
  // -------------------------------
  describe("Positive cases", () => {

    it("should convert '2.1' to 2.1", () => {
      expect(toNumber("2.1")).to.equal(2.1);
    });

    it("should return 0 for null", () => {
      expect(toNumber(null)).to.equal(0);
    });

    it("should return -2 for -2.0", () => {
      expect(toNumber(-2.0)).to.equal(-2.0);
    });

    it("should return Infinity for Infinity input", () => {
      expect(toNumber(Infinity)).to.equal(Infinity);
    });
  });


  // -------------------------------
  // NEGATIVE TEST CASES
  // -------------------------------
  describe("Negative cases", () => {

    it("should return NaN for '3,2'", () => {
      expect(toNumber("3,2")).to.be.NaN;
    });

    it("should return NaN for 'a1b2c3'", () => {
      expect(toNumber("a1b2c3")).to.be.NaN;
    });

    it("should return NaN for empty input", () => {
      expect(toNumber("")).to.equal(0);
    });

    it("should return NaN for [1,2,3]", () => {
      expect(toNumber([1,2,3])).to.be.NaN;
    });

    it("should return NaN for {}", () => {
      expect(toNumber({})).to.be.NaN;
    });
  });

});