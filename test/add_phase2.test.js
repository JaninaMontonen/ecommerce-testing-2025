import { expect } from "chai";
import add from "../src/add.js";

describe("add - tests from phase 2", () => {

    describe("Positive tests", () => {
        it("Should return 20 when augend is 15 and addend is 5", () => {
            expect(add(15,5)).to.equal(20);
        });
        it("Should return 10 when augend is 15 and addend is -5", () => {
            expect(add(15,-5)).to.equal(10);
        });
        it("Should return 14.45 when augend is 15 and addend is -0.55", () => {
            expect(add(15,-0.55)).to.equal(15+(-0.55));
        });
        it("Should return 15.55 when augend is 15 and addend is 0.55", () => {
            expect(add(15,0.55)).to.equal(15+0.55);
        });
        it("Should return 15 when augend is 15 and addend is 0", () => {
            expect(add(15,0)).to.equal(15);
        });
        it("Should return -20 when augend is -15 and addend is -5", () => {
            expect(add(-15,-5)).to.equal(-20);
        });
        it("Should return -15.55 when augend is -15 and addend is -0.55", () => {
            expect(add(-15,-0.55)).to.equal(-15+(-0.55));
        });
        it("Should return -14.45 when augend is -15 and addend is 0.55", () => {
            expect(add(-15,0.55)).to.equal(-15+0.55);
        });
        it("Should return -15 when augend is -15 and addend is 0", () => {
            expect(add(-15,0)).to.equal(-15);
        });
        it("Should return -10 when augend is -15 and addend is 5", () => {
            expect(add(-15,5)).to.equal(-10);
        });
        it("Should return -2.00 when augend is -1.45 and addend is -0.55", () => {
            expect(add(-1.45,-0.55)).to.equal(-1.45+(-0.55));
        });
        it("Should return -0.90 when augend is -1.45 and addend is 0.55", () => {
            expect(add(-1.45,0.55)).to.equal(-1.45+0.55);
        });
        it("Should return -1.45 when augend is -1.45 and addend is 0", () => {
            expect(add(-1.45,0)).to.equal(-1.45);
        });
        it("Should return 3.55 when augend is -1.45 and addend is 5", () => {
            expect(add(-1.45,5)).to.equal(-1.45+5);
        });
        it("Should return -6.45 when augend is -1.45 and addend is -5", () => {
            expect(add(-1.45,-5)).to.equal(-1.45-5);
        });
        it("Should return 2.00 when augend is 1.45 and addend is 0.55", () => {
            expect(add(1.45,0.55)).to.equal(1.45+0.55);
        });
        it("Should return 1.45 when augend is 1.45 and addend is 0", () => {
            expect(add(1.45,0)).to.equal(1.45);
        });
        it("Should return 6.45 when augend is 1.45 and addend is 5", () => {
            expect(add(1.45,5)).to.equal(1.45+5);
        });
        it("Should return -3.55 when augend is 1.45 and addend is -5", () => {
            expect(add(1.45,-5)).to.equal(1.45-5);
        });
        it("Should return 0.90 when augend is 1.45 and addend is -0.55", () => {
            expect(add(1.45,-0.55)).to.equal(1.45+(-0.55));
        });
        it("Should return 0 when augend is 0 and addend is 0", () => {
            expect(add(0,0)).to.equal(0);
        });
        it("Should return 5 when augend is 0 and addend is 5", () => {
            expect(add(0,5)).to.equal(5);
        });
        it("Should return -5 when augend is 0 and addend is -5", () => {
            expect(add(0,-5)).to.equal(-5);
        });
        it("Should return -0.55 when augend is 0 and addend is -0.55", () => {
            expect(add(0,-0.55)).to.equal(-0.55);
        });
        it("Should return 0.55 when augend is 0 and addend is 0.55", () => {
            expect(add(0,0.55)).to.equal(0.55);
        });
    });

    describe("Negative tests", () => {
        it("Should return NaN when augend is 15 and addend is NaN", () => {
            expect(add(15,NaN)).to.satisfy(Number.isNaN);
        });
        it("Should return NaN when augend is -15 and addend is NaN", () => {
            expect(add(-15,NaN)).to.satisfy(Number.isNaN);
        });
        it("Should return NaN when augend is -1.45 and addend is NaN", () => {
            expect(add(-1.45,NaN)).to.satisfy(Number.isNaN);
        });
        it("Should return NaN when augend is 1.45 and addend is NaN", () => {
            expect(add(1.45,NaN)).to.satisfy(Number.isNaN);
        });
        it("Should return NaN when augend is 0 and addend is NaN", () => {
            expect(add(0,NaN)).to.satisfy(Number.isNaN);
        });
        it("Should return NaN when augend is NaN and addend is NaN", () => {
            expect(add(NaN,NaN)).to.satisfy(Number.isNaN);
        });
        it("Should return NaN when augend is NaN and addend is 5", () => {
            expect(add(NaN,5)).to.satisfy(Number.isNaN);
        });
        it("Should return NaN when augend is NaN and addend is -5", () => {
            expect(add(NaN,-5)).to.satisfy(Number.isNaN);
        });
        it("Should return NaN when augend is NaN and addend is -0.55", () => {
            expect(add(NaN,-0.55)).to.satisfy(Number.isNaN);
        });
        it("Should return NaN when augend is NaN and addend is 0.55", () => {
            expect(add(NaN,0.55)).to.satisfy(Number.isNaN);
        });
        it("Should return NaN when augend is NaN and addend is 0", () => {
            expect(add(NaN,0)).to.satisfy(Number.isNaN);
        });
        it("Should return Number.MAX_SAFE_INTEGER when augend is 1 and addend is Number.MAX_SAFE_INTEGER-1", () => {
            expect(add(1,Number.MAX_SAFE_INTEGER-1)).to.equal(Number.MAX_SAFE_INTEGER);
        });
        it("Should return Number.MIN_SAFE_INTEGER+1 when augend is 1 and addend is Number.MIN_SAFE_INTEGER", () => {
            expect(add(1,Number.MIN_SAFE_INTEGER)).to.equal(Number.MIN_SAFE_INTEGER+1);
        });
        it("Should return Number.MAX_SAFE_INTEGER-1 when augend is -1 and addend is Number.MAX_SAFE_INTEGER", () => {
            expect(add(-1,Number.MAX_SAFE_INTEGER)).to.equal(Number.MAX_SAFE_INTEGER-1);
        });
        it("Should return Number.MIN_SAFE_INTEGER when augend is -1 and addend is Number.MIN_SAFE_INTEGER+1", () => {
            expect(add(-1,Number.MIN_SAFE_INTEGER+1)).to.equal(Number.MIN_SAFE_INTEGER);
        });
        it("Should return Number.MAX_SAFE_INTEGER-1.55 when augend is -1.55 and addend is Number.MAX_SAFE_INTEGER", () => {
            expect(add(-1.55,Number.MAX_SAFE_INTEGER)).to.equal(Number.MAX_SAFE_INTEGER-1.55);
        });
        it("Should return Number.MIN_SAFE_INTEGER when augend is -1.55 and addend is Number.MIN_SAFE_INTEGER+1.55", () => {
            expect(add(-1.55,Number.MIN_SAFE_INTEGER+1.55)).to.equal(Number.MIN_SAFE_INTEGER);
        });
        it("Should return Number.MAX_SAFE_INTEGER when augend is 1.55 and addend is Number.MAX_SAFE_INTEGER-1.55", () => {
            expect(add(1.55,Number.MAX_SAFE_INTEGER-1.55)).to.equal(Number.MAX_SAFE_INTEGER);
        });
        it("Should return Number.MIN_SAFE_INTEGER+1.55 when augend is 1.55 and addend is Number.MIN_SAFE_INTEGER", () => {
            expect(add(1.55,Number.MIN_SAFE_INTEGER)).to.equal(Number.MIN_SAFE_INTEGER+1.55);
        });
        it("Should return Number.MAX_SAFE_INTEGER when augend is 0 and addend is Number.MAX_SAFE_INTEGER", () => {
            expect(add(0,Number.MAX_SAFE_INTEGER)).to.equal(Number.MAX_SAFE_INTEGER);
        });
        it("Should return Number.MIN_SAFE_INTEGER when augend is 0 and addend is Number.MIN_SAFE_INTEGER", () => {
            expect(add(0,Number.MIN_SAFE_INTEGER)).to.equal(Number.MIN_SAFE_INTEGER);
        });
        it("Should return NaN when augend is NaN and addend is Number.MAX_SAFE_INTEGER", () => {
            expect(add(NaN,Number.MAX_SAFE_INTEGER)).to.satisfy(Number.isNaN);
        });
        it("Should return NaN when augend is NaN and addend is Number.MIN_SAFE_INTEGER", () => {
            expect(add(NaN,Number.MIN_SAFE_INTEGER)).to.satisfy(Number.isNaN);
        });
        it("Should return Number.MAX_SAFE_INTEGER+Number.MAX_SAFE_INTEGER when augend is Number.MAX_SAFE_INTEGER and addend is Number.MAX_SAFE_INTEGER", () => {
            expect(add(Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER)).to.equal(Number.MAX_SAFE_INTEGER+Number.MAX_SAFE_INTEGER);
        });
        it("Should return 0 when augend is Number.MAX_SAFE_INTEGER and addend is Number.MIN_SAFE_INTEGER", () => {
            expect(add(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER)).to.equal(0);
        });
        it("Should return Number.MAX_SAFE_INTEGER when augend is Number.MAX_SAFE_INTEGER-1 and addend is 1", () => {
            expect(add(Number.MAX_SAFE_INTEGER-1,1)).to.equal(Number.MAX_SAFE_INTEGER);
        });
        it("Should return Number.MAX_SAFE_INTEGER-1 when augend is Number.MAX_SAFE_INTEGER and addend is -1", () => {
            expect(add(Number.MAX_SAFE_INTEGER,-1)).to.equal(Number.MAX_SAFE_INTEGER-1);
        });
        it("Should return Number.MAX_SAFE_INTEGER-1.55 when augend is Number.MAX_SAFE_INTEGER and addend is -1.55", () => {
            expect(add(Number.MAX_SAFE_INTEGER,-1.55)).to.equal(Number.MAX_SAFE_INTEGER-1.55);
        });
        it("Should return Number.MAX_SAFE_INTEGER when augend is Number.MAX_SAFE_INTEGER-1.55 and addend is 1.55", () => {
            expect(add(Number.MAX_SAFE_INTEGER-1.55,1.55)).to.equal(Number.MAX_SAFE_INTEGER);
        });
        it("Should return Number.MAX_SAFE_INTEGER when augend is Number.MAX_SAFE_INTEGER and addend is 0", () => {
            expect(add(Number.MAX_SAFE_INTEGER,0)).to.equal(Number.MAX_SAFE_INTEGER);
        });
        it("Should return NaN when augend is Number.MAX_SAFE_INTEGER and addend is NaN", () => {
            expect(add(Number.MAX_SAFE_INTEGER,NaN)).to.satisfy(Number.isNaN);
        });
        it("Should return Number.MIN_SAFE_INTEGER+Number.MIN_SAFE_INTEGER when augend is Number.MIN_SAFE_INTEGER and addend is Number.MIN_SAFE_INTEGER", () => {
            expect(add(Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER)).to.equal(Number.MIN_SAFE_INTEGER+Number.MIN_SAFE_INTEGER);
        });
        it("Should return Number.MIN_SAFE_INTEGER+1 when augend is Number.MIN_SAFE_INTEGER and addend is 1", () => {
            expect(add(Number.MIN_SAFE_INTEGER,1)).to.equal(Number.MIN_SAFE_INTEGER+1);
        });
        it("Should return Number.MIN_SAFE_INTEGER when augend is Number.MIN_SAFE_INTEGER+1 and addend is -1", () => {
            expect(add(Number.MIN_SAFE_INTEGER+1,-1)).to.equal(Number.MIN_SAFE_INTEGER);
        });
        it("Should return Number.MIN_SAFE_INTEGER when augend is Number.MIN_SAFE_INTEGER+1.55 and addend is -1.55", () => {
            expect(add(Number.MIN_SAFE_INTEGER+1.55,-1.55)).to.equal(Number.MIN_SAFE_INTEGER);
        });
        it("Should return Number.MIN_SAFE_INTEGER+1.55 when augend is Number.MIN_SAFE_INTEGER and addend is 1.55", () => {
            expect(add(Number.MIN_SAFE_INTEGER,1.55)).to.equal(Number.MIN_SAFE_INTEGER+1.55);
        });
        it("Should return Number.MIN_SAFE_INTEGER when augend is Number.MIN_SAFE_INTEGER and addend is 0", () => {
            expect(add(Number.MIN_SAFE_INTEGER,0)).to.equal(Number.MIN_SAFE_INTEGER);
        });
        it("Should return NaN when augend is Number.MIN_SAFE_INTEGER and addend is NaN", () => {
            expect(add(Number.MIN_SAFE_INTEGER,NaN)).to.satisfy(Number.isNaN);
        });
        it("Should return 0 when augend is Number.MIN_SAFE_INTEGER and addend is Number.MAX_SAFE_INTEGER", () => {
            expect(add(Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER)).to.equal(0);
        });
    });
});
