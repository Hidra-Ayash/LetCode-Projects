/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  let arr1 = nums1.filter((x) => nums2.includes(x));
  let arr2 = nums1.filter((x) => nums3.includes(x));
  let arr3 = nums2.filter((x) => nums2.includes(x));
  return new Array(...new Set([...arr1, ...arr2, ...arr3]));
};
console.log(twoOutOfThree([1, 1, 3, 2], (nums2 = [2, 3]), (nums3 = [3])));
