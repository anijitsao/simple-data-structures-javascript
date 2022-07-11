// import the class
import Queue from "./queueUsingArray.js";

// initialize the Queue object
const queueTest = new Queue();

describe("=============== Testing Queue Data Structure with Jest ===============", () => {
  test("Checking the Empty Queue", () => {
    expect(queueTest.getSize()).toBe(0);
  });

  test("Printing the Empty Queue", () => {
    expect(queueTest.print()).toEqual("");
  });

  test("Pushing elements in the Queue", () => {
    queueTest.push(10);
    expect(queueTest.print()).toEqual("10");
  });

  test("Pushing element and checking size of the Queue", () => {
    expect(queueTest.getSize()).toBe(1);
  });

  test("Popping elements from the Queue", () => {
    queueTest.pop();
    expect(queueTest.print()).toEqual("");
  });

  test("Popping elements and checking size of the Queue", () => {
    expect(queueTest.getSize()).toBe(0);
  });

  test("Popping elements from an Empty Queue", () => {
    const emptyPop = queueTest.pop();
    expect(emptyPop).toBe(false);
  });

  test("Searching for a value", () => {
    queueTest.push(10);
    queueTest.push(234);
    queueTest.push(10);
    queueTest.push(99);
    expect(queueTest.search(10)).toBe(2);
  });
});
