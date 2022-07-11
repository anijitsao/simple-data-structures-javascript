// this example shows how to implement Stack Data Structure
// using Array. Most common operations using Stack is covered

export default class Stack {
  // initialize the Stack
  constructor() {
    this.elements = [];
    this.size = 0;
  }

  // PUSH opertaion
  push(ele) {
    this.elements = [...this.elements, ele];
    this.size = this.size + 1;
  }

  // POP operation LIFO
  pop() {
    if (this.size === 0) {
      return false;
    }
    this.elements.length = this.elements.length - 1;
    this.size = this.size - 1;
  }

  // print the current Stack
  print() {
    return this.elements.toString();
  }

  // get size of Stack
  getSize() {
    return this.size;
  }

  // get the index of a searched value
  search(value) {
    return this.elements.lastIndexOf(value);
  }
}
