import { fibonacci, printFibonacciChain } from "./fibonacci";

describe("Testing fibonacci of a number", () => {
  test("When the number is 0", () => {
    expect(fibonacci(0)).toEqual(0);
  });

  test("When the number is 1", () => {
    expect(fibonacci(1)).toEqual(1);
  });

  test("When there is no number", () => {
    expect(fibonacci()).toEqual(false);
  });

  test("Testing fibonacci of 5", () => {
    expect(fibonacci(5)).toEqual(5);
  });

  test("Testing fibonacci chain of 6", () => {
    expect(printFibonacciChain(6)).toEqual("0,1,1,2,3,5");
  });
});
