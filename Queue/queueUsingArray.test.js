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

  test("Enqueuing elements in the Queue", () => {
    queueTest.enqueue(10);
    expect(queueTest.print()).toEqual("10");
  });

  test("Enqueuing element and checking size of the Queue", () => {
    expect(queueTest.getSize()).toBe(1);
  });

  test("Dequeuing elements from the Queue", () => {
    queueTest.dequeue();
    expect(queueTest.print()).toEqual("");
  });

  test("Dequeuing elements and checking size of the Queue", () => {
    expect(queueTest.getSize()).toBe(0);
  });

  test("Dequeuing elements from an Empty Queue", () => {
    const emptyPop = queueTest.dequeue();
    expect(emptyPop).toBe(false);
  });

  test("Searching for a value", () => {
    queueTest.enqueue(10);
    queueTest.enqueue(234);
    queueTest.enqueue(10);
    queueTest.enqueue(99);
    expect(queueTest.search(10)).toBe(2);
  });
});
