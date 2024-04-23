/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let n = arr.length,
    sum = 0,
    elm = 0;
  let res = [];

  for (let i = 0; i < n; i++) {
    elm = Math.ceil(((n - i) * (i + 1))/2);
    sum += elm * arr[i];
  }

  return sum;
};

console.log(sumOddLengthSubarrays((arr = [1, 4, 2, 5, 3])));
