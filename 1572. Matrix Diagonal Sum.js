/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let sum = 0;
  if (mat.length > 1) {
    sum =
      mat[0][0] +
      mat[0][mat.length - 1] +
      mat[mat.length - 1][0] +
      mat[mat.length - 1][mat.length - 1];
  } else {
    return mat[0][0];
  }
  let res = [sum];
  let size = 0;
  let bool = false;
  for (let i = 1; i < mat.length - 1; i++) {
    let arr = mat[i];
    size = arr.length - 1;
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr.length % 2 == 0) {
        sum += arr[i + j] + arr[size - j - i];
        break;
      } else if (arr.length % 2 != 0) {
        sum += arr[i - j] + arr[size - j - i];
        bool = true;
        break;
      }
    }
    res.push(sum);
  }
  let center = mat[Math.floor(mat.length / 2)][Math.floor(mat.length / 2)];
  if (bool) return res[res.length - 1] - center;
  else {
    return res[res.length - 1];
  }
};
console.log(
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
