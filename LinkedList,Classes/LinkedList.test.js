import { LinkedList } from "./LinkedList";

describe("Testing LinkedList Operations", () => {
  // inserting elements
  const linkedList = new LinkedList();
  const elements = [38, 56, 120, 331, 89];
  elements.forEach((ele) => linkedList.append(ele));
  test("Testing size of the list after append", () => {
    expect(linkedList.getLength()).toEqual(5);
  });

  test("Testing Linked List search when element is present ", () => {
    expect(linkedList.search(120)).toEqual(true);
  });

  test("Testing Linked List search when element is not present ", () => {
    expect(linkedList.search(121)).toEqual(false);
  });

  test("Testing deletion of an element which is present", () => {
    expect(linkedList.remove(38)).toEqual(true);
  });

  test("Testing deletion of an element which is not present", () => {
    expect(linkedList.remove(38)).toEqual(false);
  });

  test("Testing Linked List printing", () => {
    expect(linkedList.print()).toEqual("56 -> 120 -> 331 -> 89");
  });
  test("Testing Linked List search for first element", () => {
    expect(linkedList.search(56)).toEqual(true);
  });
});
