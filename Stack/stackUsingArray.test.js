// import the class
import Stack from "./stackUsingArray.js";

// initialize the Stack object
const stackTest = new Stack();

describe("=============== Testing Stack Data Structure with Jest ===============", () => {
  test("Checking the Empty Stack", () => {
    expect(stackTest.getSize()).toBe(0);
  });

  test("Printing the Empty Stack", () => {
    expect(stackTest.print()).toEqual("");
  });

  test("Pushing elements in the Stack", () => {
    stackTest.push(10);
    expect(stackTest.print()).toEqual("10");
  });

  test("Pushing element and checking size of the Stack", () => {
    expect(stackTest.getSize()).toBe(1);
  });

  test("Popping elements from the Stack", () => {
    stackTest.pop();
    expect(stackTest.print()).toEqual("");
  });

  test("Popping elements and checking size of the Stack", () => {
    expect(stackTest.getSize()).toBe(0);
  });

  test("Popping elements from an Empty Stack", () => {
    const emptyPop = stackTest.pop();
    expect(emptyPop).toBe(false);
  });

  test("Searching for a value", () => {
    stackTest.push(10);
    stackTest.push(234);
    stackTest.push(10);
    stackTest.push(99);
    expect(stackTest.search(10)).toBe(2);
  });
});
