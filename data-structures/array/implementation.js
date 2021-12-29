class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const lastItem = this.data[index];
    delete this.data[index];
    this.shiftItems(index);
    return lastItem;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();

console.log(newArray);

console.log(newArray.push("a"));
console.log(newArray.push("b"));
console.log(newArray.push("c"));
console.log(newArray.push("d"));
console.log(newArray.push("e"));
console.log(newArray.push("f"));
console.log(newArray);
newArray.delete(2);
console.log(newArray);
