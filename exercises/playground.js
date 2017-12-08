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

// Reverse an Int
function reverseInt(n) {
  let reversed = n.toString().split('').reverse().join(''); // mispelled "split"
  return parseInt(reversed) * Math.sign(n); // had to look up Math.sign function
}

// Max Char
function maxChar(str) { // so many mistakes do again tomorrow
  let charMap = {};
  let max = 0;
  let maxChar = '';

  for(let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (let char in charMap) {
    if(charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

// Fizz Buzz
function fizzbuzz(n) { // n is not an iterable object
  for(let i = 1; i <= n; i++) { // <= not <
    let str = '';
    if(i % 3 === 0) str += 'fizz';
    if(i % 5 === 0) str += 'buzz';
    console.log(str || i); // console.log not return // log i not n
  }
}

// Array Chunking
function chunk(array, size){
  const chunked = [];
  
  for(let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, i + size));
  }

  return chunked;
}

function chunk(array, size) {
  const chunked = [];
  
  for(let element of array) {
    const lastSub = chunked[chunked.length - 1]; // .length not .length()

    if(!lastSub || lastSub.length === size) {
      chunked.push([element]); // wrap in paranthesis
    } else {
      lastSub.push(element);
    }
  }
  return chunked;
}

// Max Char
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for(let char of str) {
    charMap[char] = charMap[char] + 1 || 1; // set equal to new value, not return
  }

  for(let char in charMap) {
    if(charMap[char] > max) {
      maxChar = char;
      max = charMap[char];
    }
  }
  return maxChar;
}
