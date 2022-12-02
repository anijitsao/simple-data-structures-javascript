import { isPallindrome } from "./pallindrome";

describe("Testing isPallindrome of a string", () => {
  test("When the string is empty", () => {
    expect(isPallindrome(" ")).toEqual(true);
  });

  test("When the string is one letter", () => {
    expect(isPallindrome("m")).toEqual(true);
  });

  test("When there is no string", () => {
    expect(isPallindrome()).toEqual(false);
  });

  test("Testing isPallindrome of madam", () => {
    expect(isPallindrome("madam")).toEqual(true);
  });

  test("Testing isPallindrome of mad", () => {
    expect(isPallindrome("mad")).toEqual(false);
  });
});
