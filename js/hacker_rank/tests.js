import test from "node:test"
import assert from "node:assert"

import { countingSort } from "./countingSort.js";
import { miniMaxSum } from "./miniMaxSum.js";
import { timeConversion } from "./timeConversion.js";
import { matchingStrings } from "./matchingStrings.js";
import { lonelyinteger } from "./lonelyinteger.js";
import { flippingBits } from "./flippingBits.js";
import { diagonalDifference } from "./diagonalDifference.js";
import { pangrams } from "./pangrams.js";
import { twoArrays } from "./twoArrays.js";

test("Mini-Max Sum", () => {
    const arr = [1, 2, 3, 4, 5];
    const expectedResult = [10, 14];

    assert.deepEqual(miniMaxSum(arr), expectedResult);
});

test("Time Conversion", () => {
    const sample = '07:05:45PM';
    const expectedResult = '19:05:45';

    assert.deepEqual(timeConversion(sample), expectedResult);
});

test("Sparse Arrays", () => {
    const sampleArr = ['ab', 'ab', 'abc'];
    const sampleQueries = ['ab', 'abc', 'bc'];
    const expectedResult = [2, 1, 0];

    assert.deepEqual(matchingStrings(sampleArr, sampleQueries), expectedResult);
});

test("Lonely Integer", () => {
    const sampleArr = [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 0, 12, 0, 12];
    const expectedResult = 6;

    assert.equal(lonelyinteger(sampleArr), expectedResult);
});

test("Flipping Bits", () => {
    const sample = 1;
    const expectedResult = 4294967294;

    assert.equal(flippingBits(sample), expectedResult);
});

test("Diagonal Difference", () => {
    const sample = [
        [1, 2, 3],
        [4, 5, 6],
        [9, 8, 9]
    ];
    const expectedResult = 2;

    assert.equal(diagonalDifference(sample), expectedResult);
});

test("Counting Sort 1", () => {
    const arr = [63,25,73,1,98,73,56,84,86,57,16,83,8,25,81,56,9,53,98,67,99,12,83,89,80,91,39,86,76,85,74,39,25,90,59,10,94,32,44,3,89,30,27,79,46,96,27,32,18,21,92,69,81,40,40,34,68,78,24,87,42,69,23,41,78,22,6,90,99,89,50,30,20,1,43,3,70,95,33,46,44,9,69,48,33,60,65,16,82,67,61,32,21,79,75,75,13,87,70,33];
    const expectedResult = [0,2,0,2,0,0,1,0,1,2,1,0,1,1,0,0,2,0,1,0,1,2,1,1,1,3,0,2,0,0,2,0,3,3,1,0,0,0,0,2,2,1,1,1,2,0,2,0,1,0,1,0,0,1,0,0,2,1,0,1,1,1,0,1,0,1,0,2,1,3,2,0,0,2,1,2,1,0,2,2,1,2,1,2,1,1,2,2,0,3,2,1,1,0,1,1,1,0,2,2];

    assert.deepEqual(countingSort(arr), expectedResult);
});

test.describe("Pangrams", () => {
    test.it("It should return 'pangram' when sentence is a pangram", () => {
        const sentence = "We promptly judged antique ivory buckles for the next prize";

        assert.equal(pangrams(sentence), "pangram");
    });

    
    test.it("It should return 'not pangram' when sentence is not a pangram", () => {
        const sentence = "We promptly judged antique ivory buckles for the prize";

        assert.equal(pangrams(sentence), "not pangram");
    });
});


test.describe("Permuting Two Arrays", () => {
    test.it("It should return 'YES' when some permutation satisfies the condition of every A[i] + B[i] >= k", () => {
        const A = [2, 1, 3];
        const B = [7, 8, 9];
        const k = 10;

        assert.equal(twoArrays(k, A, B), "YES");
    });

    
    test.it("It should return 'NO' when every permutation don't satisfies the condition of every A[i] + B[i] >= k", () => {
        const A = [1, 2, 2, 1];
        const B = [3, 3, 3, 4];
        const k = 5;

        assert.equal(twoArrays(k, A, B), "NO");
    });
});
