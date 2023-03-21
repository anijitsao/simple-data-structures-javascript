import { reverseArray, findMinimum, findOccurrence } from "./arrayRelated";

describe("Testing Array Reversal", () => {
  test("Testing when no array provided", () => {
    expect(reverseArray()).toEqual(false);
  });

  test("Testing an Array having some elements", () => {
    const arrayToRevese = [12, 34, 45];
    expect(reverseArray(arrayToRevese)).toEqual([45, 34, 12]);
  });

  test("Testing when the Array is empty", () => {
    expect(reverseArray([])).toEqual([]);
  });
});

describe("Testing Occurrence of Characters", () => {
  test("Testing when the no Array provided", () => {
    expect(findOccurrence()).toEqual(false);
  });

  test("Testing when Array has some elements", () => {
    const arrayToFindOccurrence = ["a", "b", "b", "e", "e"];
    expect(findOccurrence(arrayToFindOccurrence)).toEqual({
      a: 1,
      b: 2,
      e: 2,
    });
  });

  test("Testing when the Array is empty", () => {
    expect(findOccurrence([])).toEqual({});
  });
});

describe("Testing Minumum of an Array", () => {
  test("Testing when an Array is provided", () => {
    expect(findMinimum([110, 2, 34, 22, 4])).toEqual(2);
  });
});
