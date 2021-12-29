class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) this.data[address] = [];
    this.data[address].push([key, value]);
    return [key, value];
  }

  get(key) {
    const address = this._hash(key);
    const bucket = this.data[address];
    if (bucket) {
      return bucket.find((keyValue) => keyValue[0] == key)[1];
    }
    return undefined;
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          if (this.data[i][j]) {
            keysArray.push(this.data[i][j][0]);
          }
        }
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(2);

console.log(myHashTable.set("grapes", 1000));
console.log(myHashTable.set("apples", 2000));
console.log(myHashTable.set("pears", 4000));
console.log(myHashTable.keys());
