// Practice Space for Recreating Solutions

// Reversing a String
function reverseStr(str) {
  return str.split('').reverse().join('');
}

function reverseStr(str) {
  revStr = '';
  for(let char of str) {
    revStr = char + revStr;
  }
  return revStr;
}

function reverseStr(str) {
  return str.split('')
    .reduce((revStr, char) => char + revStr, '')
}

// Palindrome
function palindrome(str) {
  return str === str.split('').reverse().join('');
}

function palindrome(str) {
  return str.split('').every((char, i) => { // use "each" rather than "every()"
    return char === str[str.length - 1 - i];
  }) 
}

function palindrome(str) {
  for(let i = 0; i < str.length / 2; i++) { // forgot .length
    if (str[i] !== str[str.length - 1 - i]) { // didn't use !==
      return false;
    }
    return true;
  }
}

// Reverse and Int

