import { checkIfDuoDigit, findMaximumDuoDigit } from "./duoDigit";

describe("Testing Maximum of Duo Digit Numbers", () => {
  test("Testing when no array provided", () => {
    expect(findMaximumDuoDigit()).toEqual(false);
  });

  test("Testing an Array having some elements", () => {
    const arrayOfNumbers = [12, 1133, 945, 99];
    expect(findMaximumDuoDigit(arrayOfNumbers)).toEqual(1133);
  });

  test("Testing when no number", () => {
    expect(checkIfDuoDigit()).toEqual(false);
  });
});
