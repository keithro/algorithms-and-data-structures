// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

/* 
Algorithm Steps:
Create empty array of arrays called results using a for loop
Create counter variable starting at 1 & start/end columns and rows
As long as start column <= end column and start row <= end row)
  loop from start column to end column
    At results[start_row][i] assign counter variable
    Increment counter
  Increment star row
  Loopo from star row to end row
    At resultes[i][end_column] assign counter variable
    Increment counter
  Decrement end column
  ...repeat for other two sides
*/
function matrix(n) {
  // Create empty array of arrays
  const results = [];

  for(let i = 0; i < n; i++) {
    results.push([]);
  }

  // Create counter, start/end column, start/end row variables
  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  // While start column <= end column and start row <= end row
  while(startColumn <= endColumn && startRow <= endRow) {
    // 4 for loops will be responsible for each side

    // Top row (left to right)
    for(let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    // Increment start row
    startRow++;

    // Right column (top to bottom)
    for(let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    // Decrement end column
    endColumn--;

    // Bottom row (right to left)
    for(let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    // Decrement end row
    endRow--;

    // Left column (bottom up)
    for(let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  return results;
}

module.exports = matrix;
