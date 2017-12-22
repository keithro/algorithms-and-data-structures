// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    // this.head = new Node(data, this.head);

    // We could also use our insertAt method
    this.insertAt(data, 0);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while(node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    // Using our getAt method
    return this.getAt(0);

    // return this.head;
  }

  getLast() {
    // Using our other methods
    return this.getAt(this.size() - 1);

    // // check if there is a head node
    // if(!this.head) {
    //   return null;
    // }

    // let node = this.head;
    // while(node) {
    //   // if there is not a next node then return
    //   if(!node.next) {
    //     return node;
    //   }
    //   node = node.next;
    // }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if(!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if(!this.head) {
      return;
    }

    // If there is only one node, remove it
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;

    while(node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();

    if(last) {
      // There are existing nodes in our chain
      last.next = new Node(data);
    } else {
      // The chain is empty
      this.head = new Node(data);
    }
  }

  getAt(index) {
    // this is actually unnecessary since our while loop will not run if there is no node.head.next
    // if(!this.head.next) return null;
    
    let counter = 0;
    let node = this.head; // temp variable to look at node.next
    while(node) {
      if (counter === index) {
        return node;
      }
      counter++;
      // move to next node
      node = node.next;
    }
    // if we never get to node at index (the chain is shorter than the index specified) return null
    return null;
  }

  removeAt(index) {
    // handle case if no nodes in chain
    if(!this.head) return null;

    // handle case if only one node in chain
    if(index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    // if previous or previous.next is null (either does not exist), return
    if(!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    // handle case if no nodes in chain
    if(!this.head) {
      this.head = new Node(data);
      return;
    }

    // handle case if only one node in chain and index 0
    if(index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    // get previous or last if it does not exist (the list is shorter than index)
    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next)
    previous.next = node;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while(node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  // Generator function with the key of Symbol.iterator
  *[Symbol.iterator]() {
    let node = this.head;
    while(node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
