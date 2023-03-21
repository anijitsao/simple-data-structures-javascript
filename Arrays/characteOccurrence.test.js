import { findCharacters } from "./characteOccurrence";

describe("Testing Occurrence of Characters", () => {
  test("Testing when the no Array provided", () => {
    expect(findCharacters()).toEqual(false);
  });

  test("Testing when Array has some elements", () => {
    const arrayToFindOccurrence = ["a", "b", "b", "e", "f", "z", "s", "z", "e"];
    expect(findCharacters(arrayToFindOccurrence)).toEqual({
      a: 1,
      b: 2,
      e: 2,
      f: 1,
      z: 2,
      s: 1,
    });
  });

  test("Testing when the Array is empty", () => {
    expect(findCharacters([])).toEqual({});
  });
});
