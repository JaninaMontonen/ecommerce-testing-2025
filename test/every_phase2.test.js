import { expect } from "chai";
import every from "../src/every.js";

describe("every - tests from phase 2", () => {

    describe("Array evaluates as empty", () => {
        it("Should return true for an empty array", () => {
            expect(every([], () => false)).to.equal(true);
        });
        it("Should return true when the array is null", () => {
            expect(every(null, () => false)).to.equal(true);
        });
        it("Should return true when the array is undefined", () => {
            expect(every(undefined, () => false)).to.equal(true);
        });
    });

    describe("Array has one element", () => {
        it("Should return true when the array is [5] and it passes the predicate", () => {
            expect(every([5], x => x > 0)).to.equal(true);
        });
        it("Should return false when the array is [5] and it fails the predicate", () => {
            expect(every([5], x => x < 0)).to.equal(false);
        });
    });

    describe("Array has multiple elements", () => {
        it("Should return true when all elements pass the predicate", () => {
            expect(every([1, 2, 3], x => x > 0)).to.equal(true);
        });  
        it("Should return false when the first element fails the predicate", () => {
            expect(every([0, 1, 2], x => x > 0)).to.equal(false);
        });
        it("Should return false when a middle element fails the predicate", () => {
            expect(every([1, -1, 2], x => x > 0)).to.equal(false);
        });
        it("Should return false when the last element fails the predicate", () => {
            expect(every([1, 2, -1], x => x > 0)).to.equal(false);
        });
        it("Should handle an array with various types and return true when predicate always returns true", () => {
            expect(every([1, '2', true, { x: 1 }], () => true)).to.equal(true);
        });
    });

    describe("", () => {
        it("Should throw a TypeError if predicate is not a function", () => {
            expect(() => every([1, 2, 3], null)).to.throw(TypeError);
        });
    });
});