// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  // if there is a max value and the current node is larger than max return false
  if(max !== null && node.data > max) {
    return false;
  }
  // if there is a min value and the current node is smaller than the min return false
  if(min !== null && node.data < min) {
    return false;
  }
  // if there is a node to the left and calling our function with a max equal to the current node returns false then return false
  if(node.left && !validate(node.left, min, node.data)) {
    return false;
  }
  // if there is a node to the right and calling our function with a min equal to our current node returns false then return false
  if(node.right && !validate(node.right, node.data, max)) {
    return false;
  }

  return true;
}

module.exports = validate;
