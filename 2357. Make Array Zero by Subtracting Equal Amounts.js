/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  let count = 0;

  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0 && nums[i] != nums[i + 1]) {
      count++;
    }
  }
  return count;
};
console.log(minimumOperations((nums = [0])));
