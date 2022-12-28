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

  print() {
    const listElements = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      listElements.push(currentNode.element);
      currentNode = currentNode.next;
    }
    return listElements.join(" -> ");
  }

  remove(element) {
    let currentNode = this.head;
    let prevNode = null;

    // iterate over the list
    while (currentNode != null) {
      // comparing element with currentNode element
      // if found then remove the node
      if (currentNode.element === element) {
        if (prevNode == null) {
          this.head = currentNode.next;
        } else {
          prevNode.next = currentNode.next;
        }
        this.size = this.size - 1;
        return true;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    return false;
  }
}

export { LinkedList };
