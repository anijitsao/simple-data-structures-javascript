import { reverseAnArray } from "./reverseArray";

describe("Testing Array Reversal", () => {
  test("Testing an empty array", () => {
    expect(reverseAnArray()).toEqual(false);
  });

  test("Testing an Array having some elements", () => {
    const arrayToRevese = [12, 34, 45];
    expect(reverseAnArray(arrayToRevese)).toEqual([45, 34, 12]);
  });
});
