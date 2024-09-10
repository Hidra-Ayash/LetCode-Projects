/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let elm = 0;

  for (let i = 0; i < nums.length; i++) {
    elm = elm ^ nums[i];
  }
  return elm;
};
console.log(singleNumber([4, 1, 2, 1, 2]));
