/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function (nums) {
  if (nums.length == 1) {
    return true;
  }
  let count1 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 != nums[i + 1] % 2) {
      count1++;
    } else {
      count1 = 0;
      break;
    }
  }
  if (count1 > 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isArraySpecial([1, 5, 2]));
