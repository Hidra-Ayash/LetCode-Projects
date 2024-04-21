/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max1 = 0;
  let max2 = 0,
    numIndex = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= max1) {
      max1 = nums[i];
      numIndex = i;
    }
  }

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] >= max2 && numIndex != j) {
      max2 = nums[j];
    }
  }
  console.log(max1, max2);
  return (max1 - 1) * (max2 - 1);
  //Or Another Code
  //   let arr = [];
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       arr.push((nums[i] - 1) * (nums[j] - 1));
  //     }
  //   }
  //   return Math.max(...arr);
};
console.log(maxProduct((nums = [3, 7])));
