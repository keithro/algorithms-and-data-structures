// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// // ====== Solution 1: mine ======
// function vowels(str) {
//   const list = ['a', 'e', 'i', 'o', 'u'];
//   let count = 0;

//   for(let char of str.toLowerCase()) {
//     if(list.indexOf(char) >= 0) {
//       count++;
//     }
//   }

//   return count;
// }

// // ====== Solution 1: with .includes() ======
// function vowels(str) {
//   let count = 0;
//   const list = ['a', 'e', 'i', 'o', 'u'];

//   for(let char of str.toLowerCase()) {
//     if(list.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }

// ====== Solution 3: with regex ======
function vowels(str) {
  const matches = str.match(/[aeiou]/gi); // match return an array
  return matches ? matches.length : 0;
}

module.exports = vowels;
