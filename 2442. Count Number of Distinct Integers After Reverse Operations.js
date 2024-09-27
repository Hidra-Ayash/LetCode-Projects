/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function (nums) {
  let setNums = new Set(nums);
  let str = "";
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    str = nums[i] + "";
    arr.push(...str);
    arr.reverse();
    str = arr.join("");
    setNums.add(Number(str));
    arr = [];
  }
  return setNums.size;
};
console.log(countDistinctIntegers([2, 2, 2]));
