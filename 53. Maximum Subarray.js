/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let currSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (currSum < 0 && nums[i] > 0) {
      currSum = nums[i];
    } else if (currSum < 0 && nums[i] < 0) {
      currSum = currSum - nums[i];
    } else {
      currSum = currSum + nums[i];
    }
    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
};
console.log(maxSubArray([-2, -1]));
