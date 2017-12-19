// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record) {
    this.first.push(record);
  }

  remove() {
    while(this.first.peek()) {
      // remove from first stack and add to second stack
      this.second.push(this.first.pop());
    }
    // save record but do not return until we move everyting back to first stack
    const record = this.second.pop();

    while(this.second.peek()) {
      // put everything back in first stack
      this.first.push(this.second.pop());
    }
    return record;
  }

  peek() {
    while(this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.peek();

    while(this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }
}

module.exports = Queue;
