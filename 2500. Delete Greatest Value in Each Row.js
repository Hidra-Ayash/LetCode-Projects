/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
  let arr = [];
  let max = 0,
    index = 0;

  for (let i = 0; grid[0].length !== 0; i++) {
    for (let j = 0; j < grid.length; j++) {
      max = Math.max(...grid[i]);
      index = grid[j].indexOf(max);
      arr.push(max);
      grid[j].splice(index, 1);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    max += arr[i];
  }
  return max;
};
console.log(
  deleteGreatestValue([
    [
      [9, 81],
      [33, 17],
    ],
  ])
);
