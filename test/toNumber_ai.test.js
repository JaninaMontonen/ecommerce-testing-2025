
import { expect } from "chai";
import toNumber from "../src/toNumber.js";

describe('toNumber', () => {
  // Positiiviset testit
  it('should return the same number if input is a number', () => {
    expect(toNumber(3.2)).to.equal(3.2);
    expect(toNumber(Number.MIN_VALUE)).to.equal(Number.MIN_VALUE);
    expect(toNumber(Infinity)).to.equal(Infinity);
    expect(toNumber(0)).to.equal(0);
  });

  it('should convert numeric string to number', () => {
    expect(toNumber('3.2')).to.equal(3.2);
    expect(toNumber('42')).to.equal(42);
    expect(toNumber('  10  ')).to.equal(10); // whitespace trim
  });

  it('should convert binary string to number', () => {
    expect(toNumber('0b101')).to.equal(5);
  });

  it('should convert octal string to number', () => {
    expect(toNumber('0o10')).to.equal(8);
  });

  it('should convert object with valueOf to number', () => {
    const obj = { valueOf: () => 7 };
    expect(toNumber(obj)).to.equal(7);
  });

  // Negatiiviset testit
  it('should return NaN for symbol', () => {
    expect(Number.isNaN(toNumber(Symbol('test')))).to.be.true;
  });

  it('should return NaN for bad hex string', () => {
    expect(Number.isNaN(toNumber('-0x1'))).to.be.true;
    expect(Number.isNaN(toNumber('+0xabc'))).to.be.true;
  });

  it('should return NaN for non-numeric string', () => {
    expect(Number.isNaN(toNumber('abc'))).to.be.true;
  });

  it('should return NaN for object without numeric conversion', () => {
    expect(Number.isNaN(toNumber({ foo: 'bar' }))).to.be.true;
  });

  it('should return NaN for undefined and null', () => {
    expect(Number.isNaN(toNumber(undefined))).to.be.true;
    expect(toNumber(null)).to.equal(0);
  });
});
