class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const node = new Node(value);
    if (this.root === null) {
      this.root = node;
      return;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value > currentNode.value) {
        if (currentNode.right === null) {
          currentNode.right = node;
          return;
        }
        currentNode = currentNode.right;
      } else {
        if (currentNode.left === null) {
          currentNode.left = node;
          return;
        }
        currentNode = currentNode.left;
      }
    }
  }
  lookup(value) {
    if (this.root == null) return null;
    let result = null;
    let current = this.root;
    while (!result && current) {
      if (value === current.value) result = current;
      else if (value > current.value) current = current.right;
      else if (value < current.value) current = current.left;
    }
    return result;
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);
tree.insert(15);
tree.insert(170);
tree.insert(170);

console.log(tree.lookup(170));
console.log(tree.lookup(20));

console.log(JSON.stringify(traverse(tree.root)));

//         9
//    4        20
//  1   6   15   170
//
function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
