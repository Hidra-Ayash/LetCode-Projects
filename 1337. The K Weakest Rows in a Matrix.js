/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  let arr = [];
  let count = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].sort((a, b) => a - b).length; j++) {
      if (mat[i][j] == 1) {
        count++;
      }
    }
    arr.push([i, count]);
    count = 0;
  }

  arr.sort((a, b) => a[1] - b[1]);
  let res1 = [];
  for (let i = 0; i < k; i++) {
    res1.push(arr[i][0]);
  }

  return res1;
};
console.log(
  kWeakestRows(
    (mat = [
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ]),
    (k = 3)
  )
);
