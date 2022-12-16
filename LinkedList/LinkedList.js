// a Node in the Linked List
class LinkedListNode {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    // first create a node with the value supplied and then append it
    let nodeNew = new LinkedListNode(value);

    // if the list is empty
    if (this.head === null) {
      this.head = nodeNew;
      this.tail = nodeNew;
    }

    // if the list has some nodes
    if (this.head) {
      let lastNode = this.head;
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
      lastNode.next = nodeNew;
      this.tail = nodeNew;
    }
  }
}

const list1 = new LinkedList();
console.log("list", list1);

list1.append(24);
console.log("List is", list1);
list1.append(45);
console.log("List", list1);
list1.append(57);
console.log("List", list1);
