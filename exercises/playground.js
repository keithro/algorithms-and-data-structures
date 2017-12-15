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
    charMap[char] = charMap[char] + 1 || 1; // need to set equal to new value, not return
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

// MAX CHAR
function maxChar(str) {
  let charMap = {};
  let max = 0;
  let maxChar = '';

  for(let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for(let char in charMap) {
    if(charMap[char] > max) { // used maxChar instead of charMap
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar
}

// FIZZBUZZ
function fizzbuzz(n) {
  for(let i = 1; i <= n; i++) {
    let str = '';
    if(i % 3 === 0) str += 'fizz';
    if(i % 5 === 0) str += 'buzz';
    console.log(str || i); // used n instaid of i again!!!
  }
}
function fizzbuzz(n) {
  for(let i = 1; i <= n; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if ( i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

// PRINT STEPS
function steps(n) {
  for(let row = 0; row < n; row++) {
    let str = '';
    for(let col = 0; col < n; col++) {
      if(col <= row) {
        str += '#';
      } else {
        str += ' ';
      }
    }
    console.log(str);
  }
}

// PRINT STEPS RECURSIVE
function steps(n, row = 0, step = '') {
  if (row === n) {
    return;
  }

  if (step.length === n) {
    console.log(step);
    return steps(n, row + 1);
  }

  // if (step.length <= row) { // used steps not step
  //   step += '#';
  // } else {
  //   step += ' ';
  // }
  // steps(n, row, step);

  const add = step.length <= row ? '#' : ' ';
  steps(n, row, step + add);
}

// FIND VOWELS
function vowels(str) {
  const list = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for(let char of str.toLowerCase()) { // forgot to lower case and forgot the ()
    if (list.includes(char)) { // messed this up, had str.includes(list)
      count ++;
    }
  }
  return count; // forgot to return count
}
function vowels(str) {
  const matches = str.match(/[aeiou]/gi); // match not matches
  return matches ? matches.length : 0;
}

// REVERSE STRING
function reverse(str) {
 return str.split('').reverse().join('');
}

function reverse(str) {
  let reversed = '';

  for(let char of str) { // Used "in" rather than "of"
    reversed = char + reversed;
  }

  return reversed;
}

function reverse(str) {
  return str
    .split('')
    .reduce((reversed, char) => reversed = char + reversed, '');
}

// ARRAY CHUNKING
function chunk(arr, size) {
  let chunked = [];
  
  for(let i = 0; i < arr.length; i + size) {
    chunked.push(arr.splice(i, i + size));
  }

  return chunked;
}
// 2
function chunk(arr, size) {
  let chunked = [];

  for(let item of arr) {
    let last = chunked[chunked.length - 1];

    if(!last || last.length === size) { // forgot to account for no inner array
      chunked.push([item]);
    } else {
      last.push(item);
    }
  }
  return chunked;
}

// PYRAMID
function pyramid(n) {
  const midpoint = Math.floor((n * 2 - 1) / 2);

  for(let row = 0; row < n; row++) {
    let level = '';

    for(let col = 0; col < n * 2 -1; col++) {
      if(col >= midpoint - row && col <= midpoint + row) { // still had my signs wrong
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
  if(row === n) {
    return;
  }

  if(level.length === n * 2 - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  let midpoint = Math.floor((n * 2 - 1) / 2);
  let add;
  if(level.length >= midpoint - row && level.length <= midpoint + row) {
    add = "#";
  } else {
    add = ' ';
  }
  return pyramid(n, row, level + add);
}

// PALINDROME
function palindrome(str) {
  return str === str.split('').reverse().join('');
}

function palindrom(str) {
  for(let char = 0; char < str.length / 2; char++) {
    if(char !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - 1 - i];
  })
}

// ANAGRAMS
function anagrams(stringA, stringB) {
  return cleanStr(stringA) === cleanStr(stringB);
}

function cleanStr(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

// 2
function anagrams(stringA, stringB) {
  strA = stringA.replace(/[^\w]/g, '').toLowerCase();
  strB = stringB.replace(/[^\w]/g, '').toLowerCase();

  if(strA.length !== strB.length) return false; // forgot .length()

  const charMapA = makeMap(strA); // didn't create const
  const charMapB = makeMap(strB);

  for(let key in charMapA) {
    if(charMapA[key] !== charMapB[key]) {
      return false;
    }
  }
  return true;
}

function makeMap(str) {
  let charMap = {}; // used empty array instead of object

  for(let char of str) {
    charMap[char] = charMap[char] + 1 || 1 // forgot to assisng to charMap[char] with the [char] key
  }
  return charMap;
}
// 3
function anagrams(stringA, stringB) {
  const mapA = buildMap(stringA);
  const mapB = buildMap(stringB);

  if(Object.keys(mapB).length !== Object.keys(mapA).length) { // forgot .length
    return false;
  }

  for(let key in mapA) {
    if(mapA[key] !== mapB[key]) {
      return false;
    }
  }
  return true;
}

function buildMap(str) {
  const map = {};

  for(let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    map[char] = map[char] + 1 || 1;
  }
  return map;
}

// FIND VOWELS
function vowels(str) {
  const list = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for(let char of str.toLowerCase()) { // forgot to lower case!!!
    if(list.includes(char)) {
      count++;
    }
  }
  return count; // for got to return count!!!
}

// 2
function vowels(str) {
  const matches = str.match(/[aeiou]/gi); // forgot [] in regex
  return matches ? matches.length : 0; // forgot to deal with an null
}

// MATRIX - HOLY SHIIIIIIIIIT!!!!
function matrix(n) {
  const results = [];
  for(let i = 0; i < n; i++){
    results.push([]);
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while(startColumn <= endColumn && startRow <= endRow) {
    for(let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    for(let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++
    }
    endColumn--;

    for(let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    for(let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  return results;
}


