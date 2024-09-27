/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let sort = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[left] > nums[right]) {
      let elm = nums[left];
      nums[left] = nums[right];
      nums[right] = elm;
      left++;
      right--;
    }

    sort.push(nums[i]);
  }
  return sort;
};
console.log(sortArray([5, 1, 1, 2, 0, 0]));
