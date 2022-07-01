// this example shows how to implement Stack Data Structure
// using Array.

class Stack {
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
    console.log(`Stack size ${this.size}`);
  }
}

const stack1 = new Stack();

// print the stack
stack1.print();

// push some elements
console.log("============= ADDING ELEMENTS ===============");
stack1.push(10);
stack1.push(18);

// print the stack
stack1.print();
stack1.getSize();

stack1.pop();
stack1.print();
stack1.getSize();
