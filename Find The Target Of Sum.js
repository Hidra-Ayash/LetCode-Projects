/**
 *
 * @param {[]} nums
 * @param {Number} target
 */
function targetOfSum(nums, target) {
  let hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    hashMap.set(nums[i], i);
  }
  let targetMap = 0;
  let res = [];
  for (let elm of hashMap) {
    targetMap = target - elm[0];
  }
  return res;
}
console.log(targetOfSum([1, 2, 4, 3, 5], 3));
