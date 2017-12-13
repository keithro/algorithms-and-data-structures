// Practice Space for Recreating Solutions

// Reversing a String
function reverseStr(str) {
  return str.split('').reverse().join('');
}

function reverseStr(str) {
  revStr = '';            // forgot to use "let"
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
  return str.split('').every((char, i) => { // used "each" rather than "every()"
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

// REVERSE STRING
function reverseStr(str) {
  return str.split('').reverse().join('');
}

function reverseStr(str) {
  let revStr = ''; // used const

  for(let char of str) {
    revStr = char + revStr;
  }
  return revStr; // forgot to return string
}

function reverseStr(str) {
  return str.split('').reduce((str, char) => char + str, '')
}

// FIZZBUZZ
function fizzbuzz(n) { // mispelled buzz
  for(let i = 1; i <= n; i++) { // forgot to use <=
    let str = '';
    if(i % 3 === 0) str += 'fizz';
    if(i % 5 === 0) str += 'buzz';
    console.log(str || i); // used return rather than log, then tried to log n
  }
}

function fizzbuzz(n) {
  for(let i = 1; i <= n; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if(i % 3 === 0) {
      console.log('fizz');
    } else if(i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i); // still logging n WTF?!?
    }
  }
}

// ANAGRAMS
function anagrams(stringA, stringB) {
  return cleanStr(stringA) === cleanStr(stringB);
}

function cleanStr(str) {    // still need help with regex
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

// long version
function anagrams(stringA, stringB) {
  const strA = stringA.replace(/[^\w]/g, '').toLowerCase();
  const strB = stringB.replace(/[^\w]/g, '').toLowerCase();

  if(strA.length !== strB.length) {
    return false;
  }

  const mapA = mapChars(strA);
  const mapB = mapChars(strB);

  for(let char in mapA) {
    if(mapA[char] !== mapB[char]) {
      return false;
    }
    return true;
  }
}

function mapChars(str) {
  let charMap = {};

  for(let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

// PALINDROME
function palindrome(str) {
  return str === str.split('').reverse().join(''); // Used = rather than ===
}

function palindrome(str) {
  for(let i = 0; i < str.length / 2; i++) {
    if(str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true
}

function palindrome(str) {          // completely forgot how to do this one
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1]
  })
}

// ARRAY CHUNKING
function chunk(array, size) {
  const chunked = [];
  
  for(let i = 0; i < array.length; i += size) { //forgot the = in +=
    chunked.push(array.slice(i, i + size));
  }
  return chunked;
}

function chunk(array, size) {
  let chunked = [];
  
  for(let item of array) {
    const lastItem = chunked[chunked.length - 1];

    if(!lastItem || lastItem.length === size) {
      chunked.push([item]);
    } else {
      lastItem.push(item);
    }
  }
  return chunked;
}

// SENTENCE CAPITALIZATION
function capitalize(str) {
  return str
    .split(' ')
    .map(item => item[0].toUpperCase() + item.slice(1)) // forgot to add rest of word
    .join(' ')
}

function capitalize(str) {
  const words = [];

  for(let word of str.split(' ')) {     // forgot to split string
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ');
}

// REVERSE INT
function reverseInt(n) {
  // forgot to turn into string, forgot () in reverse, n in Math.sign(n)
  let reversed = n.toString().split('').reverse().join('');
  // didnt't parse int
  return parseInt(reversed) * Math.sign(n);
}

// ANAGRAMS
function anagrams(stringA, stringB) {
  return cleanStr(stringA) === cleanStr(stringB);
}

function cleanStr(str) { // forgot to sort, to join, and to use '' in join('')
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}
// ----------
function anagrams(stringA, stringB) {
  const mapA = buildMap(stringA);
  const mapB = buildMap(stringB);

  if(Object.keys(mapA).length !== Object.keys(mapB).length) {
    return false;
  }

  for(let letter in mapA) {
    if(mapA[letter] !== mapB[letter]) {
      return false;
    }
    return true;
  }
}

function buildMap(str) {
  let charMap = {};

  for(let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

// STEPS
function steps(n) {
  for(let row = 0; row < n; row++) {
    let str = '';
    for (let col = 0; col < n; col++) {
      if(col <= row) {
        str += '#';
      } else {
        str += ' ';
      }
    }
    console.log(str); // forgot to console.log
  }
}

function steps(n, row = 0, step = '') {
  if(row === n) {
    return;
  }

  if(step.length === n) {
    console.log(step);
    return steps(n, row + 1)
  }

  // if(step.length <= row) {
  //   step += '#';
  // } else {
  //   step += ' ';
  // }
  // return steps(n, row, step);

  const add = step.length <= row ? '#' : ' ';
  return steps(n, row, step + add)
}

// MAX CHAR
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
      maxChar = char;
    }
  }
  return maxChar;
}

// CAPITALIZE SENTENCE
function capitalize(str) {
  return str
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1)) // did not need index, forgot parenthesis on .toUpperCase()
    .join(' ');
}

function capitalize(str) {
  let words = [];

  for(let word of str.split(' ')) { // forgot to split str
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ');
}

// PYRAMID
function pyramid(n) {
  const midpoint = Math.floor((n * 2 - 1) / 2); // put paranthasis around whole expression

  for (let row = 0; row < n; row++) {
    let level = '';
    for (let col = 0; col < n * 2 - 1; col++) { // forgot "col++"
      if (midpoint - row <= col && midpoint + row >= col) { // got this all wrong
        level += '#';
      } else {
        level += ' ';
      }
    }

    console.log(level);
  }
}

// PYRAMID RECURSIVE
function pyramid(n, row = 0, level = '') {
  if (row === n) {
    return;
  }

  if (level.length === n * 2 - 1) { // needed level.length not "col"
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((n * 2 - 1) / 2);
  let add;
  if (level.length >= midpoint - row && level.length <= midpoint + row) { // "<=" not "<"
    add = '#';
  } else {
    add = ' ';
  }
  return pyramid(n, row, level + add);
}


