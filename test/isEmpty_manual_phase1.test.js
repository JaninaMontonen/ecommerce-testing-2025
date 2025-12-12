import { expect } from "chai";
import isEmpty from "../src/isEmpty.js";

describe("isEmpty - manual tests from phase 1", () => {

    describe("String values", () => {
        it("Should return true for \"\"", () => {
            expect(isEmpty("")).to.equal(true);
        });
        it("Should return false for \"dog\"", () => {
            expect(isEmpty("dog")).to.equal(false);
        });
    });

    describe("Indexed collections (array, TypedArray object, buffer, array-like object, arguments object)", () => {
        it("Should return true for []", () => {
            expect(isEmpty([])).to.equal(true);
        });
        it("Should return false for [0,1,2]", () => {
            expect(isEmpty([0,1,2])).to.equal(false);
        });
        it("Should return true for new Uint8Array()", () => {
            expect(isEmpty(new Uint8Array())).to.equal(true);
        });
        it("Should return false for new Uint8Array([1,2])", () => {
            expect(isEmpty(new Uint8Array([1,2]))).to.equal(false);
        });
        it("Should return true for Buffer.alloc(0)", () => {
            expect(isEmpty(Buffer.alloc(0))).to.equal(true);
        });
        it("Should return false for Buffer.alloc(1)", () => {
            expect(isEmpty(Buffer.alloc(1))).to.equal(false);
        });
        it("Should return true for {0: \"a\", length: 0, splice() {}}", () => {
            expect(isEmpty({0: "a", length: 0, splice() {}})).to.equal(true);
        });
        it("Should return false for {0: \"a\", 1: \"b\", length: 2, splice() {}}", () => {
            expect(isEmpty({0: "a", 1: "b", length: 2, splice() {}})).to.equal(false);
        });
        it("Should return true for an empty arguments object", () => {
            const args = (function(){ return arguments; })();
            expect(isEmpty(args)).to.equal(true);
        });
        it("Should return false for a non-empty arguments object", () => {
            const args = (function(){ return arguments; })("a", "b");
            expect(isEmpty(args)).to.equal(false);
        });
    });

    describe("Keyed collections (map, set)", () => {
        it("Should return true for new Map()", () => {
            expect(isEmpty(new Map())).to.equal(true);
        });
        it("Should return false for new Map([[\"animal\", \"dog\"],[\"age\", 1]])", () => {
            expect(isEmpty(new Map([["animal", "dog"],["age", 1]]))).to.equal(false);
        });
        it("Should return true for new Set()", () => {
            expect(isEmpty(new Set())).to.equal(true);
        });
        it("Should return false for new Set([1,2,3])", () => {
            expect(isEmpty(new Set([1,2,3]))).to.equal(false);
        });
    });

    describe("Other enumerable objects", () => {
        it("Should return true for {}", () => {
            expect(isEmpty({})).to.equal(true);
        });
        it("Should return false for {animal: \"dog\"}", () => {
            expect(isEmpty({animal: "dog"})).to.equal(false);
        });
    });

    describe("Other primitive values", () => {
        it("Should return true for undefined", () => {
            expect(isEmpty(undefined)).to.equal(true);
        });
        it("Should return true for null", () => {
            expect(isEmpty(null)).to.equal(true);
        });
        it("Should return true for 1", () => {
            expect(isEmpty(1)).to.equal(true);
        });
    });

});