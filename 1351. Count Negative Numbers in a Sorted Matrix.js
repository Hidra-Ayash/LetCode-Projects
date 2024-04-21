/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  let count = 0;
  let arr = [];
  for (let i = 0; i < grid.length; i++) {
    arr = grid[i];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < 0) count++;
    }
  }
  return count;
};
console.log(
  countNegatives(
    (grid = [
      [4, 3, 2, -1],
      [3, 2, 1, -1],
      [1, 1, -1, -2],
      [-1, -1, -2, -3],
    ])
  )
);
