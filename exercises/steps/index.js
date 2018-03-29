// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// // ====== My Solution ======
// function steps(n) {
//   for(let i = 1; i <= n; i++){
//     let str = '';
//     for(let j = 1; j <= i; j++) {
//       str += '#';
//     }
//     for(let k = n - i; k > 0; k--) {
//       str += ' ';
//     }
//     console.log(str);
//   }
// }

// // ====== Solution 1 ======
// function steps(n) {
//   for(let r = 0; r < n; r++) {
//     let step = '';

//     for(let c = 0; c < n; c++) {
//       // if(c <= r) {
//       //   step += '#';
//       // } else {
//       //   step += ' ';
//       // }
//       step += c <= r ? '#' : ' ';
//     }
//     console.log(step);
//   }
// }

// // ====== Solution 1: with recursion ======
// function steps(n, row = 0, stair = '') { // default row is 0
//   // if row = n we are done
//   if(n === row) {
//     return;
//   }

//   // if the string length = n we are donw with the row
//   if (n === stair.length) { // when we hit end of stair
//     console.log(stair);
//     return steps(n, row + 1); // incriment row but let string default to empty
//   }

//   // build string
//   if(stair.length <= row) {
//     stair += '#';
//   } else {
//     stair += ' ';
//   }
//   steps(n, row, stair); // calling function with same row to build string
// }

// ====== Solution 1.b: recursion refactored ======
function steps(n, row = 0, stair = '') {
  // if row = n we are done
  if(n === row) {
    return;
  }

  // if the string length = n we are donw with the row
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  // build string
  stair.length <= row ? stair += '#' : stair += ' ';
  steps(n, row, stair);
  
  // const add = stair.length <= row ? '#' : ' ';
  // steps(n, row, stair + add);
}

module.exports = steps;
