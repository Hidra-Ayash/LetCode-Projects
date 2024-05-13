/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(2 * i + 1);
  }
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= n) {
      res += Math.abs(arr[i] - n);
    }
  }

  return res;
};
console.log(minOperations(3));
