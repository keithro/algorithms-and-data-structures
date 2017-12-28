// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const arr = [root, 's'];
  const counters = [0];

  while(arr.length > 1) {
    // remove node from array
    const node = arr.shift();
    if(node === 's') {
      // and new counter in our array
      counters.push(0);
      // put s back at the end of array
      arr.push('s');
      // else if actual node:
    } else {
      // add children to end of array
      arr.push(...node.children);
      // increment counter
      counters[counters.length - 1]++;
    }
  }

  return counters;
}

module.exports = levelWidth;
