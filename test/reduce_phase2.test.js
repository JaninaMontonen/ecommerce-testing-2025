import { expect } from "chai";
import reduce from "../src/reduce.js";

describe("reduce - tests from phase 2", () => {

    describe("Arrays", () => {
        it("Should reduce an array of multiple elements with an accumulator: returns 7 when array is [1, 2, 3] and accumulator is 1", () => {
            const result = reduce([1, 2, 3], (sum, n) => sum + n, 1);
            expect(result).to.equal(7);
        });
        it("Should reduce an array of multiple elements without an initial accumulator: returns 6 when array is [1, 2, 3]", () => {
            const result = reduce([1, 2, 3], (sum, n) => sum + n);
            expect(result).to.equal(6);
        });
        it("Should return undefined for an empty array without accumulator", () => {
            const result = reduce([], (acc, v) => acc + v);
            expect(result).to.equal(undefined);
        });
        it("Should return 10 for an empty array when accumulator is 10", () => {
            const result = reduce([], (acc, v) => acc + v, 10);
            expect(result).to.equal(10);
        });
        it("Should reduce an array of one element (5) with an accumulator (10) and return 15", () => {
            const result = reduce([5], (acc, v) => acc + v, 10);
            expect(result).to.equal(15);
        });
        it('Should reduce an array of one element (5) without an accumulator and return 5', () => {
            const result = reduce([5], (acc, v) => acc + v);
            expect(result).to.equal(5);
        });
    });

    describe("Objects", () => {
        it("Should reduce an object with an accumulator {}", () => {
            const result = reduce(
                { a: 1, b: 2, c: 1 },
                (acc, value, key) => {
                    (acc[value] || (acc[value] = [])).push(key)
                    return acc
                },
                {}
            );
            expect(result).to.deep.equal({
                1: ['a', 'c'],
                2: ['b']
            });
        });
        it("Should reduce an object without an accumulator", () => {
            const result = reduce(
                { a: 2, b: 3 },
                (acc, value) => acc + value
            );
            expect(result).to.equal(5);
        });
        it("Should return 10 for an empty object when accumulator is 10", () => {
            const result = reduce({}, (acc, v) => acc + v, 10);
            expect(result).to.equal(10);
        });
        it("Should return undefined for an empty object without accumulator", () => {
            const result = reduce({}, (acc, v) => acc + v);
            expect(result).to.equal(undefined);
        });        
        it("Should reduce an object of one property (a: 5) with an accumulator (10) and return 15", () => {
            const result = reduce({ a: 5 }, (acc, v) => acc + v, 10);
            expect(result).to.equal(15);
        });
        it("Should reduce an object of one property (a: 5) without an accumulator and return 5", () => {
            const result = reduce({ a: 5 }, (acc, v) => acc + v);
            expect(result).to.equal(5);
        });
    });

    describe("Error case", () => {
        it("Should return the accumulator (5) when the collection is null", () => {
            const result = reduce(null, () => 1, 5);
            expect(result).to.equal(5);
        });        
    });
});