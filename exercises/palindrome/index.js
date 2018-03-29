// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// ===== Solution 1 =====
// function palindrome(str) {
//   if(str === str.split('').reverse().join('')) {
//     return true;
//   }
//   return false;
// }

// ===== Solution 1.b: cleaner (returning boolean value) =====
function palindrome(str) {
  return str === str.split('').reverse().join('');
}

//  ===== Solution 2: with .every() =====
function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

// ===== Solution 3: only iterating over indexis necessary =====
function palindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    // if (str.charAt(i) !== str.charAt(str.length - 1 - i)) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    };
  }
  return true;
}

module.exports = palindrome;
