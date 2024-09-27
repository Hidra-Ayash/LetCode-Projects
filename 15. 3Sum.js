/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let setSum = new Set();
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = i + 2; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] == 0 && i != j && i != k && j != k) {
          let arr = [nums[i], nums[j], nums[k]];
          arr.sort((a, b) => a - b);
          setSum.add(arr);
        }
      }
    }
  }
  return setSum;
};
console.log(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]));
