// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  let slow = list.head; // could also use list.getFirst()
  let fast = list.head; // could also use list.getFirst()

  while(fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    // compare the entire nodes to check if they are the exact same instance in memory
    if(slow === fast) {
      return true;
    }
  }
  // no circular list
  return false;
}

module.exports = circular;
