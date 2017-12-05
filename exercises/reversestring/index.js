// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// ===== Solution 1 with .reverse() =====
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// ===== Solution 2 without .reverse() =====
// function reverse(str) {
//   let newStr = [];
//   str.split('');
//   for(let i = (str.length - 1); i >= 0; i--) {
//     newStr.push(str[i]);
//   }
//   return newStr.join('');
// }

// ===== Solution 2.b for loop with new for syntax =====
function reverse(str) {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
    // debugger;                        // see instructions below
  }
  return reversed;
}

// ===== Solution 3 with .reduce() =====
// function reverse(str) {
//   return str.split('').reduce((revStr, char) => char + revStr, '');
// }

/* 
To use debugger:
Add a 'debugger' stmt in our function.
Call our function manually (see below instructions),
then run 'node inspect index.js' in this directory (not exercise dir).
Use 'cont' or 'c' to continue execution to next debugger statement.
Then use 'repl' command to inspect variables.
copy/paste function to see if it works correctly.
ctrl+C to exit repl, then c to continue (if there are more debugger statements), or ctrl+C again to exit debugger
 */
// reverse('abc123');

module.exports = reverse;
