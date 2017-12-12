// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// ====== Solution 1 ======
// function chunk(array, size) {
//   let chunked = [];

//   for(let element of array) {
//     // last sub array
//     const last = chunked[chunked.length -1];

//     if(!last || last.length === size) {
//       // if no elements or inner array = size add new sub array
//       chunked.push([element]);
//     } else {
//       // else add to last sub array
//       last.push(element);
//     }
//   }
//   return chunked
// }

// ====== Solution 2 ======
// function chunk(array, size) {
//   const chunked = [];

//   for(let i = 0; i < array.length; i += size){
//     chunked.push(array.slice(i, i + size));
//   }

//   return chunked
// }

// ====== Solution 2.b: his implimentation of the slice method w/ while loop ======
function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while(index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

module.exports = chunk;
