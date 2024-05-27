/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
  if (ops.length == 0) {
    return n * m;
  }

  let indexOne = [],
    indexTwo = [];
  for (let i = 0; i < ops.length; i++) {
    indexOne.push(ops[i][0]);
    indexTwo.push(ops[i][1]);
  }
  indexOne.sort((a, b) => a - b);
  indexTwo.sort((a, b) => a - b);
  return indexOne[0] * indexTwo[0];
};
console.log(maxCount(1, 1, [[1, 1]]));
