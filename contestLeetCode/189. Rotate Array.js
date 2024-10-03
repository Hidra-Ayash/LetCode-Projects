/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (k == 0) {
    return nums;
  }
  k = k % nums.length;
  let rightArr = nums.splice(nums.length - k, k);
  console.log(rightArr);
  nums.unshift(...rightArr);
  return nums;
};
console.log(rotate([1, 2, 3], 2));
