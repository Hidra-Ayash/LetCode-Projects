/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {
  let rowArray = new Array(m).fill(0);
  let colArray = new Array(n).fill(0);
  for (const [r, c] of indices) {
    rowArray[r]++;
    colArray[c]++;
  }
  let count = 0;
  console.log(rowArray, colArray);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if ((rowArray[i] + colArray[j] )% 2 != 0) {
        console.log(rowArray[i], colArray[j]);
        count++;
      }
    }
  }
  return count;
};
console.log(
  oddCells(
    (m = 2),
    (n = 2),
    (indices = [
      [1, 1],
      [0, 0],
    ])
  )
);
