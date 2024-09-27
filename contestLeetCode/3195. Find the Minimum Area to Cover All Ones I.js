/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumArea = function (grid) {
  let rows = grid.length;
  let col = grid[0].length;
  let top = rows;
  let bottom = 0;
  let left = col;
  let right = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] == 1) {
        top = Math.min(top, i);
        bottom = Math.max(bottom, i);
        left = Math.min(left, j);
        right = Math.max(right, j);
      }
    }
  }
  console.log(bottom, top, left, right);
  let width = right - left + 1;
  let height = bottom - top + 1;
  return width * height;
};

console.log(
  minimumArea([
    [0, 1, 0],
    [1, 0, 1],
  ])
);
