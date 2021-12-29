class Node {
  value;
  next;
  constructor(value, next) {
    this.value = value;
    this.next = next ? next : null;
  }
}

class LinkedList {
  head;
  tail;
  length;
  constructor(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  get(value) {
    let node = this.head;
    do {
      if (node.value === value) return node;
      else node = node.next;
    } while (node != null);
    return null;
  }
  append(value) {
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return node;
  }
  prepend(value) {
    const node = new Node(value, this.head);
    this.head = node;
    this.length++;
    return node;
  }
  insert(index, value) {
    if (typeof index !== "number") throw new Error("index must be a number");
    if (index >= this.length)
      throw new Error("index must be smaller than linked list length");

    if (index === 0) {
      return this.prepend(value);
    }
    let leader = this.traverseToIndex(index - 1);
    let currentNode = leader.next;
    const node = new Node(value, currentNode);
    leader.next = node;
    this.length++;
    return node;
  }
  remove(index) {
    if (typeof index !== "number") throw new Error("index must be a number");
    if (index > this.length)
      throw new Error("index must be smaller or equal than linked list length");

    const leader = this.traverseToIndex(index - 1);
    if (leader.next == null) return null;
    const unwantedNode = leader.next.next;
    leader.next = unwantedNode;
    this.length--;
    return currentNode;
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  print() {
    const list = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return list;
  }
  reverse() {
    if (this.length == 1) return this.head;
    let first = this.head;
    this.tail = first;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
  }
}

/*
const myLinkedList = new LinkedList(10);
myLinkedList.append(12);
myLinkedList.append(14);
myLinkedList.append(15);
myLinkedList.insert(1, 11);
myLinkedList.prepend(9);
myLinkedList.insert(4, 13);
console.log(myLinkedList.print());
myLinkedList.remove(4);
//console.log(myLinkedList.get(13));
console.log(myLinkedList.print());
*/
const linkedList = new LinkedList(1);
linkedList.append(10);
linkedList.append(16);
linkedList.append(88);
console.log(linkedList.print());
linkedList.reverse();
console.log(linkedList.print());
