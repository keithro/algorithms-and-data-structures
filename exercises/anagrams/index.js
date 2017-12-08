// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// ====== My Solution ======
// function anagrams(stringA, stringB) {
//    // oops didn't need to split into array
//   let strA = stringA.replace(/[^\w]/g, "").toLowerCase().split('');
//   let strB = stringB.replace(/[^\w]/g, "").toLowerCase().split('');

//   if(strA.length !== strB.length) {
//     return false;
//   }
  
//   function buildMap(str) {
//     let charMap = {};
//     for(let char of str) {
//       charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap;
//   }
//   const charMapA = buildMap(strA);
//   const charMapB = buildMap(strB);

//   for(let char in charMapA) {
//     if(charMapA[char] !== charMapB[char]) {
//       return false;
//     }
//     return true; // should this be outside the for loop?
//   }
// }

// ====== Solution 1: a better ver of mine ======
// function anagrams(stringA, stringB) {
//   const charMapA = buildMap(stringA);
//   const charMapB = buildMap(stringB);

//   // Need to compare an array of keys since they are objects not strings
//   if(Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//     return false;
//   }
//   for(let char in charMapA) {
//     if(charMapA[char] !== charMapB[char]) {
//       return false;
//     }
//   }
//   return true;
// }

// function buildMap(str) {
//   let charMap = {};

//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }

// ====== Solution 2 ======
function anagrams(stringA, stringB) {
  // const arrA = cleanArr(stringA);
  // const arrB = cleanArr(stringB);

  return cleanStr(stringA) === cleanStr(stringB);
}

function cleanStr(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
