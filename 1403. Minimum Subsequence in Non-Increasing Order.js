/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
  nums.sort((a, b) => b - a);
  let arr = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  let maxElm = 0;
  for (let i = 0; i < nums.length; i++) {
    maxElm += nums[i];
    arr.push(nums[i]);
    if (maxElm > sum - maxElm) {
      break;
    }
  }
  return arr;
};
console.log(minSubsequence([4, 3, 10, 9, 8]));
