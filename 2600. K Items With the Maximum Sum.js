/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function (numOnes, numZeros, numNegOnes, k) {
  let one = 1;
  let zero = 0;
  let neg = -1;
  let arr = [];
  for (let i = 0; i < numOnes; i++) {
    arr.push(one);
  }
  for (let i = 0; i < numZeros; i++) {
    arr.push(zero);
  }
  for (let i = 0; i < numNegOnes; i++) {
    arr.push(neg);
  }
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(
  kItemsWithMaximumSum((numOnes = 3), (numZeros = 2), (numNegOnes = 0), (k = 2))
);
