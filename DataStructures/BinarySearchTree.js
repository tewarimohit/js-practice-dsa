// Binary tree: Tree data structure in which each node has at most 2 children
// They are reffered to as left and right child
// Binary Search tree: value of each left node must be smaller than the parent node
// Value of each right node must be grater than the parent node.
// Operations:
// insertion: insert a node on the tree.
// Search: To find a node given its value
// DFS(Depth For Search) and BFS(Breadth for Search): To visit all nodes in a tree.
// Delete: To remove a node given its value.

// Application: Searching, sorting, to implement abstract data types such as **lookup tables** and **priority queues*

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

  isEmpty() {
    return this.root === null;
  }
}

const bst = new BinarySearchTree();

console.log(bst.isEmpty());
