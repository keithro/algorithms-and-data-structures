// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// ====== My Solution 1 ======
// function fizzBuzz(n) {
//   for(let i = 1; i <= n; i++) {
//     if(i % 3 === 0 || i % 5 === 0) {
//       let printStr = '';

//       if (i % 3 === 0) {
//         printStr += "fizz";
//       }
//       if (i % 5 === 0) {
//         printStr += "buzz"
//       }

//       console.log(printStr);
//     } else {
//       console.log(i);
//     }
//   }
// }

// ====== Solution 2: his solution ======
// function fizzBuzz(n) {
//   for (let i = 1; i <= n; i++) {
//     if (i % 15 === 0) {
//       console.log('fizzbuzz');
//     } else if (i % 3 === 0) {
//       console.log('fizz');
//     } else if (i % 5 === 0) {
//       console.log('buzz');
//     } else {
//       console.log(i);
//     }
//   }
// }

// ====== Solution 3: refactored from Q&A ======
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    let str = '';
    if (i % 3 ===0) str += 'fizz';
    if (i % 5 ===0) str += 'buzz';
    console.log(str || i);
  }
}

module.exports = fizzBuzz;
