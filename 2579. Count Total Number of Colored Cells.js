/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function (n) {
  return Math.pow(n, 2) + Math.pow(n - 1, 2);
};
console.log(coloredCells(3));