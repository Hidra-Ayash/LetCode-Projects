/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {
  let twoNums = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    let xor = nums[i] ^ nums[i + 1];
    if (xor == 0) {
      twoNums.push(nums[i]);
    }
  }
  return twoNums;
};
console.log(getSneakyNumbers([0, 3, 2, 1, 3, 2]));
