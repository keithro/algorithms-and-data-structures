// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// ====== My unseccessful attempt ======
// function maxChar(str) {
//   let charMap = str.split('').reduce((charMap, char) => {
//     if (let char of charMap){
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//     return charMap;
//   }, {})
//   return charMap.sort((a, b) => { // this is an array method, not object
//     return a.letter - b.letter;
//   })
// }

function maxChar(str) {
  let charMap = {};
  let max = 0;
  let maxChar = '';

  for(let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for(let char in charMap) {
    if(charMap[char] > max) {
      max = charMap[char];
      maxChar = char; // char is assigned the value of the key in the for loop
    }
  }
  return maxChar;
}

module.exports = maxChar;
