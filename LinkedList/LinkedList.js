// a Node in the Linked List
class Node {
  constructor(value) {
    this.element = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    // first create a node with the value supplied and then append it
    let nodeToInsert = new Node(value);

    // if the list is empty
    if (this.head === null) {
      this.head = nodeToInsert;
      this.length = this.length + 1;
    } else {
      // if the list is not empty
      let lastNode = this.head;
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
      lastNode.next = nodeToInsert;
      this.length = this.length + 1;
    }
  }

  getLength() {
    return this.length;
  }

  search(element) {
    let currentNode = this.head;
    // for the first node
    if (currentNode.element === element) {
      return true;
    }
    while (currentNode.next) {
      currentNode = currentNode.next;
      if (currentNode.element === element) {
        return true;
      }
    }
    return false;
  }

  printList() {
    const listElements = [this.head.element];
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
      listElements.push(currentNode.element);
    }
    return listElements.toString();
  }
}

const list1 = new LinkedList();
console.log("list", list1);
list1.append(37);
console.log("list", list1);
list1.append(38);
console.log("list", list1);
console.log(`list has ${list1.getLength()} elements`);

console.log("does the list has element", 38, list1.search(38));
console.log("does the list has element", 37, list1.search(37));
console.log("does the list has element", 35, list1.search(35));

console.log("print list", list1.printList());
