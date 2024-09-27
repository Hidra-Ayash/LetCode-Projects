/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let product = 1;
  function signFunc(product) {
    if (product > 0) {
      return 1;
    } else if (product < 0) {
      return -1;
    } else {
      return 0;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    product *= nums[i];
  }
  let res = signFunc(product);
  return res;
};
console.log(arraySign([-1, 1, -1, 1, -1]));
