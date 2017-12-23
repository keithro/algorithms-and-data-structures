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
  return count; // forgot to return count!!!
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

// REVERSE INT
function reverseInt(n) {
  const result = n.toString().split('').reverse().join('');

  return parseInt(result) * Math.sign(n); // accidentally multiplied by result again
}

// SENTENCE CAP
function capitalize(str) {
  return str.split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1)) // slice not splice
    .join(' ');
}

function capitalize(str) {
  const results = [];

  for (let word of str.split(' ')) {
    results.push(word[0].toUpperCase() + word.slice(1)); // didn't push results into an array
  }

  return results.join(' ');
}

// MATRIX
function matrix(n) {
  let results = [];
  for(let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1; // needs to start at 1 not 0
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while(startColumn <= endColumn && startRow <= endRow) {
    // top row
    for(let i = startColumn; i <= endColumn; i++) { // less than or EQUAL to
      results[startRow][i] = counter;
      counter++
    }
    startRow++;

    // right column
    for (let i = startRow; i <= endRow; i++) { // less than or EQUAL to
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;

    // bottom row
    for(let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    for(let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter; // didnt set equal to counter
      counter++;
    }
    startColumn++
  }

  return results;
}

// FIBONACCI
function fib(n) {
  let arr = [0, 1];

  for(let i = 2; i <= n; i++) { // less than or EQUAL to
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr[n];
}
// 2
function fib(n) {
  if(n < 2) return n;

  return fib(n - 1) + fib(n - 2);
}

// with memoization
function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  }
}

function fib(n) {
  if(n < 2) return n;

  return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

// MAXCHAR
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for(let char of str.toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for(let char in charMap) { // use IN for objects
    if(charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

// oops did PYRAMID
function pyramid(n) {
  const midpoint = Math.floor((n * 2 - 1) / 2);

  for(let row = 0; row < n; row++) {
    let level = '';

    for(let column = 0; column < n * 2 -1; column++) {
      if(column >= midpoint - row && column <= midpoint + row) {
        level += '#';
      } else {
        level += ' ';
      }
    }
    console.log(level);
  }
}

function pyramid(n, row = 0, level = '') {
  if(row === n) {
    return;
  }

  if(level.length === n * 2 - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((n * 2 - 1) / 2);
  let add = '';
  if(level.length >= midpoint - row && level.length <= midpoint + row) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, level + add);
}

// PRINT STEPS
function steps(n) {
  for(let row = 0; row < n; row++) {
    let level = '';

    for(let column = 0; column < n; column++) {
      if(column <= row) {
        level += '#';
      } else {
        level += ' ';
      }
    }
    console.log(level);
  }
}

function steps(n, row = 0, level = '') {
  if(row === n) {
    return;
  }

  if(level.length === n) {
    console.log(level);
    return steps(n, row + 1);
  }

  let add = '';
  if(level.length <= row) {
    add = '#';
  } else {
    add = ' ';
  }
  steps(n, row, level + add);
}

// THE QUEUE
class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }
}

// FIZZBUZZ
function fizzbuzz(n) {
  for(let i = 1; i <= n; i++) { // LESS THAN OR EQUAL TO!!!!
    let str = '';
    if(i % 3 === 0) str += 'fizz';
    if(i % 5 === 0) str += 'buzz';
    console.log(str || i); // STOP LOGGING 'N'!!!!
  }
}

function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) { // i EQUALS 1 NOT 0!!!
    let str = '';
    if(i % 3 === 0) str += 'fizz';
    if(i % 5 === 0) str += 'buzz';
    console.log(str || i);
  }
}

function fizzbuzz(n) {
  for(let i = 1; i <= n; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if(i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

// PYRAMID
function pyramid(n) {
  const midpoint = Math.floor((n * 2 - 1) / 2);

  for(let row = 0; row < n; row++) { // LESS THAN not less than or equal to
    let level = '';

    for(let col = 0; col < n * 2 - 1; col++) {
      if(col >= midpoint - row && col <= midpoint + row) {
        level += '#';
      } else {
        level += ' ';
      }
    }
    console.log(level); // Didn't console.log, then logged variable name
  }
}

function pyramid(n, row = 0, level = '') {
  if(row === n) {
    return;
  }

  if(level.length === n * 2 - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((n * 2 - 1) / 2);
  let add;
  if(level.length >= midpoint - row && level.length <= midpoint + row) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, level + add);
}

// FIBONACCI
function fib(n) {
  let results = [0, 1];

  for(let i = 2; i <= n; i++) { // LESS THAN OR EQUAL TO not less than
    results.push(results[i - 1] + results[i - 2]);
  }
  return results[n];
}
// recursive
function fib(n) {
  if(n < 2) return n;

  return fib(n - 1) + fib(n - 2);
}

function memoize(fn) { // Still can't remember this function
  let cache = {};
  return function(...args) {
    if(cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  }
}

fib = memoize(fib);

// QUEUE WEAVE
class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

function weave(sourceOne, sourceTwo) {
  const q = new Queue(); // forgot 'const' and '()'

  while(sourceOne.peek() || sourceTwo.peek()) {
    if(sourceOne.peek()) { // forgot '()'
      q.add(sourceOne.remove());
    }

    if(sourceTwo.peek()) {
      q.add(sourceTwo.remove());
    }
  }

  return q;
}

// ARRAY CHUNKING
function chunk(array, size) {
  let chunked = [];
  
  for(let item of array) {
    let last = chunked[chunked.length - 1]; // Needs to be inside for loop
    if(!last || last.length === size) { // need to account for no inner array and use || to check if already the length of the size parameter
      chunked.push([item]);
    } else {
      last.push(item);
    }
  }
  return chunked;
}
// 2
function chunk(array, size) {
  let chunked = [];
  let index = 0;

  while(index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}
// 3
function chunk(array, size) {
  const chunked = [];

  for (let i = 0; i < array.length; i += size) { // created infinite loop by not using the equal sign in +=
    chunked.push(array.slice(i, i + size));
  }
  return chunked;
}

// FIND THE VOWEL
function vowels(str) {
  const array = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for(let char of str.toLowerCase()) { // Add .toLowerCase
    if(array.includes(char)) count++;
  }
  return count; // forgot to return count
}
// 2
function vowels(str) {
  let results = str.match(/[aeiou]/gi); // .match not .includes, didn't use the '/' or 'gi' in regex

  return results ? results.length : 0; // can't use ||
}

// QUEUE
class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  /* Not time for peek yet, next exercise */
  // peek() {
  //   return this.data[this.data.length - 1];
  // }
}

// STACK
class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1]
  }
}

// ANAGRAMS
function anagrams(stringA, stringB) {
  return cleanStr(stringA) === cleanStr(stringB);
}

function cleanStr(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join(''); // RETURN!!! and join with a ''!
}
// 2
function anagrams(stringA, stringB) {
  const mapA = createMap(stringA);
  const mapB = createMap(stringB);

  if (Object.keys(mapA).length !== Object.keys(mapB).length) { // forgot .length() !
    return false;
  }

  for(let item in mapA) {
    if(mapA[item] !== mapB[item]) {
      return false;
    }
  }
  return true;
}

function createMap(str) {
  let map = {};

  for(let char of str.replace(/[^\w]/g, '').toLowerCase()) { // replace and lowerCase!
    map[char] = map[char] + 1 || 1;
  }
  return map;
}

// MATRIX
function matrix(n) {
  const results = []; // Forgot to use const
  for(let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1; // Forgot to use let in all variables
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while(startColumn <= endColumn && startRow <= endRow) {
    for(let i = startColumn; i <= endColumn; i++){
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    for(let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter; // Forgot to set equal to count...
      counter++;
    }
    endColumn--;

    for(let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter; // Forgot to set equal to count...
      counter++;
    }
    endRow--;

    for(let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter; // Forgot to set equal to count...
      counter++;
    }
    startColumn++
  }
  return results; // RETURN RESULTS!!!
}

// QUEUE WEAVING
class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop(); // forgot 'data'
  }

  peek() {
    return this.data[this.data.length - 1]; // forgot to return
  }
}

function weave(sourceOne, sourceTwo) {
  const q = new Queue; // forgot to create a queue

  while(sourceOne.peek() || sourceTwo.peek()) {
    if(sourceOne.peek()) {
      q.add(sourceOne.remove());
    }

    if(sourceTwo.peek()) {
      q.add(sourceTwo.remove());
    }
  }
  return q;
}
function weave(sourceOne, sourceTwo) {
  const q = new Queue();

  // As long as one does not return null or undefined for the next index
  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      q.add(sourceOne.remove());
    }

    if (sourceTwo.peek()) {
      q.add(sourceTwo.remove());
    }
  }
  return q;
}

// QUEUE FROM STACK
class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record) {
    this.first.push(record);
  }

  remove() {
    while(this.first.peek()) {
      this.second.push(this.first.pop());
    }
    const record = this.second.pop(); // can use 'const'; need to .pop() data off second stack (remember we are removing)

    while(this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return record;
  }

  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }
    const record = this.second.peek(); // Use peek. Remember the Stack already had a peek method

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return record;
  }
}

// SENTENCE CAPITALIZATION
function capitalize(str) {
  return str
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1)) // left out '.' before toUpperCase()
    .join(' ');
}

function capitalize(str) {
  let result = [];

  for(let word of str.split(' ')) {
    result.push(word[0].toUpperCase() + word.slice(1));
  }
  return result.join(' ');
}

// STACK
class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

// REVERSE A STRING
function reverse(str) {
  return str.split('').reverse().join(''); // RETURN YOU FOOL!
}

function reverse(str) {
  let result = '';
  for(let char of str) { // use OF not 'in' in loop
    result = char + result;
  }
  return result;
}

function reverse(str) { // don't need "join()" since we are adding to a string
  return str.split('') .reduce((result, char) => result = char + result, '') // We can also omit "result =" and just use "char + result".
}

// PRINTING STEPS
function steps(n) {
  for(let row = 0; row < n; row++) {
    let level = '';

    for(let col = 0; col < n; col++) {
      if(col <= row) {
        level += '#';
      } else {
        level += ' ';
      }
    }
    console.log(level);
  }
}

function steps(n, row = 0, level = '') {
  if(row === n) {
    return;
  }

  if(level.length === n) { // equal to n not row
    console.log(level);
    return steps(n, row + 1); // return function AND increment row (not just incrememnt row)
  }

  if(level.length <= row) {
    level += '#';
  } else {
    level += ' ';
  }
  steps(n, row, level);
}

function fib(n) {
  const arr = [0, 1];

  for(let i = 2; i <=n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr[n];
}

// recursive solution
function fib(n) {
  if(n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

function memoize(fn) {
  const cache = {};
  return function(...args) {
    if(cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  }
}

fib = memoize(fib);

// QUEUE FROM STATCK
class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

class Queue {
  constructor() {
    this.first = new Stack(); // use 'this.' rather than a variable assignment
    this.second = new Stack();
  }

  add(record) {
    this.first.push(record);
  }

  remove() {
    while(this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.pop();

    while(this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }

  peek() {
    while(this.first.peek()) {
      this.second.push(this.first.pop());
    }
    const record = this.second.peek(); // remember the Stack already has its own peek method

    while(this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return record;
  }
}

