// this example shows how to implement Queue Data Structure
// using Array. Most common operations using Queue is covered

export default class Queue {
  // initialize the Queue
  constructor() {
    this.elements = [];
    this.size = 0;
  }

  // ENQUEUE opertaion
  enqueue(ele) {
    this.elements = [...this.elements, ele];
    this.size = this.size + 1;
  }

  // DEQUEUE operation FIFO
  dequeue() {
    if (this.size === 0) {
      return false;
    }
    this.elements.splice(0, 1);
    this.size = this.size - 1;
  }

  // print the current Queue
  print() {
    return this.elements.toString();
  }

  // get size of Queue
  getSize() {
    return this.size;
  }

  // get the index of a searched value
  search(value) {
    return this.elements.lastIndexOf(value);
  }
}
