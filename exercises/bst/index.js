// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    // if the new node is less than the current node and there is already a left side node
    if(data < this.data && this.left) {
      // call our function on the left node
      this.left.insert(data);
    // if there is not a left side node
    } else if(data < this.data) {
      this.left = new Node(data);
    // if the node is greater than the current node and there is already a right side node
    } else if(data > this.data && this.right) {
      // we call our function on the right side node
      this.right.insert(data);
    // else create new node on right
    } else if(data > this.data) {
      this.right = new Node(data);
    }
  }

  contains(data) {
    if(data === this.data) {
      return this; // entire node
    }
    
    if (this.data < data && this.right) { // going in reverse order than above
      return this.right.contains(data);
    } else if(this.data > data && this.left) {
      return this.left.contains(data);
    }

    return null;
  }
}

module.exports = Node;
