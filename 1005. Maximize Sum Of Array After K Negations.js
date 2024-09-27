/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  for (let i = 0; i < k; i++) {
    let min = Math.min(nums[i], nums[i + 1]);
    console.log(min);
  }

  return nums;
};
console.log(largestSumAfterKNegations((nums = [3, -1, 0, 2]), (k = 3)));
