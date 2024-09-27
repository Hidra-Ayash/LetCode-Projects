/**
 * @param {[]} nums
 */

var countInversions = function (nums) {
  let count = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    let elm = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (elm > nums[j]) {
        count++;
      }
    }
    sum += count;
    count = 0;
  }
  return sum;
 
};
let arr = [1, 2];
console.log(countInversions(arr));
