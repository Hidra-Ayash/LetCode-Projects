/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function (nums) {
  let value = -1;
  let min = Math.min(...nums);
  let max = Math.max(...nums);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > min && nums[i] < max) {
      value = nums[i];
    }
  }
  return value;
};
console.log(findNonMinOrMax([3, 2, 1, 4]));
