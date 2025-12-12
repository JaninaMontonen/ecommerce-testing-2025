import { expect } from "chai";
import isEmpty from "../src/isEmpty.js";

describe('isEmpty - AI generated tests from phase 2', () => {
  //
  // ────────────────────────────────────────────────────────────────
  //  Null / Undefined
  // ────────────────────────────────────────────────────────────────
  //
  it('should return true for null', () => {
    expect(isEmpty(null)).to.be.true
  })

  it('should return true for undefined', () => {
    expect(isEmpty(undefined)).to.be.true
  })

  //
  // ────────────────────────────────────────────────────────────────
  //  Primitive values
  // ────────────────────────────────────────────────────────────────
  //
  it('should return true for boolean values', () => {
    expect(isEmpty(true)).to.be.true
    expect(isEmpty(false)).to.be.true
  })

  it('should return true for numbers', () => {
    expect(isEmpty(1)).to.be.true
    expect(isEmpty(0)).to.be.true
    expect(isEmpty(NaN)).to.be.true
    expect(isEmpty(Infinity)).to.be.true
  })

  it('should return true for symbols', () => {
    expect(isEmpty(Symbol('test'))).to.be.true
  })

  it('should return true for bigint', () => {
    expect(isEmpty(BigInt(10))).to.be.true
  })

  //
  // ────────────────────────────────────────────────────────────────
  //  Strings
  // ────────────────────────────────────────────────────────────────
  //
  it('should return true for empty string', () => {
    expect(isEmpty('')).to.be.true
  })

  it('should return false for non-empty string', () => {
    expect(isEmpty('abc')).to.be.false
  })

  //
  // ────────────────────────────────────────────────────────────────
  //  Arrays
  // ────────────────────────────────────────────────────────────────
  //
  it('should return true for empty array', () => {
    expect(isEmpty([])).to.be.true
  })

  it('should return false for non-empty array', () => {
    expect(isEmpty([1, 2])).to.be.false
  })

  //
  // ────────────────────────────────────────────────────────────────
  //  Array-like objects
  // ────────────────────────────────────────────────────────────────
  //
  it('should return true for empty arguments object', () => {
    (function() {
      expect(isEmpty(arguments)).to.be.true
    })()
  })

  it('should return false for non-empty arguments object', () => {
    (function(a) {
      expect(isEmpty(arguments)).to.be.false
    })(1)
  })

  //
  // ────────────────────────────────────────────────────────────────
  //  Buffers
  // ────────────────────────────────────────────────────────────────
  //
  it('should return true for empty buffer', () => {
    const buf = Buffer.alloc(0)
    expect(isEmpty(buf)).to.be.true
  })

  it('should return false for non-empty buffer', () => {
    const buf = Buffer.from([1])
    expect(isEmpty(buf)).to.be.false
  })

  //
  // ────────────────────────────────────────────────────────────────
  //  Typed Arrays
  // ────────────────────────────────────────────────────────────────
  //
  it('should return true for empty typed array', () => {
    expect(isEmpty(new Uint8Array())).to.be.true
  })

  it('should return false for non-empty typed array', () => {
    expect(isEmpty(new Uint8Array([1]))).to.be.false
  })

  //
  // ────────────────────────────────────────────────────────────────
  //  Maps and Sets
  // ────────────────────────────────────────────────────────────────
  //
  it('should return true for empty Map', () => {
    expect(isEmpty(new Map())).to.be.true
  })

  it('should return false for non-empty Map', () => {
    const m = new Map()
    m.set('a', 1)
    expect(isEmpty(m)).to.be.false
  })

  it('should return true for empty Set', () => {
    expect(isEmpty(new Set())).to.be.true
  })

  it('should return false for non-empty Set', () => {
    const s = new Set()
    s.add(1)
    expect(isEmpty(s)).to.be.false
  })

  //
  // ────────────────────────────────────────────────────────────────
  //  Plain Objects
  // ────────────────────────────────────────────────────────────────
  //
  it('should return true for empty object', () => {
    expect(isEmpty({})).to.be.true
  })

  it('should return false for object with own enumerable properties', () => {
    expect(isEmpty({ a: 1 })).to.be.false
  })

  it('should ignore inherited properties', () => {
    const proto = { a: 1 }
    const obj = Object.create(proto)
    expect(isEmpty(obj)).to.be.true
  })

  //
  // ────────────────────────────────────────────────────────────────
  //  Prototype objects (behavior based only—no direct getTag/isPrototype testing)
  // ────────────────────────────────────────────────────────────────
  //
  it('should return true for prototype objects with no own properties', () => {
    function C() {}
    expect(isEmpty(C.prototype)).to.be.true
  })

  it('should return false for prototype objects with own properties', () => {
    function C() {}
    C.prototype.a = 1
    expect(isEmpty(C.prototype)).to.be.false
  })

  //
  // ────────────────────────────────────────────────────────────────
  //  Other non-object values
  // ────────────────────────────────────────────────────────────────
  //
  it('should return true for functions (no enumerable props)', () => {
    function f() {}
    expect(isEmpty(f)).to.be.true
  })

  it('should return false for functions with enumerable props', () => {
    function f() {}
    f.a = 1
    expect(isEmpty(f)).to.be.false
  })
})