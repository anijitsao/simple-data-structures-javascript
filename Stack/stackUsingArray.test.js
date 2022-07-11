// import the class
import Stack from "./stackUsingArray.js";

// initialize the Stack object
const stackTest = new Stack();

describe("=============== Testing Stack Data Structure with Jest ===============", () => {
  test("Checking the Empty Stack", () => {
    expect(stackTest.getSize()).toBe(0);
  });

  test("Printing the Empty Stack", () => {
    expect(stackTest.print()).toBe("This Stack is empty");
  });
});
