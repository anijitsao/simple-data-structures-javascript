// this example shows how to implement Stack Data Structure
// using Array.

export default class Stack {
  // initialize the Stack
  constructor() {
    this.elements = [];
    this.size = 0;
  }

  // PUSH opertaion LIFO
  push(ele) {
    this.elements = [...this.elements, ele];
    this.size = this.size + 1;
  }

  // POP operation LIFO
  pop() {
    this.elements.length = this.elements.length - 1;
    this.size = this.size - 1;
  }

  // print the current Stack
  print() {
    if (this.size === 0) {
      console.log("This Stack is empty");
    } else {
      console.log(this.elements.toString());
    }
  }

  // get size of Stack
  getSize() {
    return this.size;
  }
}
