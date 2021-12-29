class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.bottom = node;
    } else {
      node.next = this.top;
    }
    this.top = node;
    this.length++;
  }
  pop() {
    if (this.isEmpty()) return null;
    if (this.length === 1) this.bottom = null;
    this.top = this.top.next;
    this.length--;
  }
  isEmpty() {
    if (this.length === 0) return true;
    return false;
  }
}

const myStack = new Stack();

myStack.push("Discord");
myStack.push("Udemy");
myStack.push("Google");
console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());
console.log(myStack.isEmpty());
