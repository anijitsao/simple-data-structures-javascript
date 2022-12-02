import { factorial } from "./factorial";

describe("Testing factorial of a number", () => {
  test("When the number is 0", () => {
    expect(factorial(0)).toEqual(1);
  });

  test("When the number is 1", () => {
    expect(factorial(1)).toEqual(1);
  });

  test("When there is no number", () => {
    expect(factorial()).toEqual(false);
  });

  test("Testing factorial of 5", () => {
    expect(factorial(5)).toEqual(120);
  });
});
