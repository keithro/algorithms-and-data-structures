// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


// ===== Solution 1: similar to using if statement =====
// function reverseInt(n) {
//   let reversed = n.toString().split('').reverse().join('');
//   return parseInt(Math.sign(n) > -1 ? reversed : `-${reversed}`)
// }

// ===== Solution 2: cleaner (could use 1 line but looks messy and long) =====
function reverseInt(n) {
  let reversed = n.toString().split('').reverse().join('');
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
