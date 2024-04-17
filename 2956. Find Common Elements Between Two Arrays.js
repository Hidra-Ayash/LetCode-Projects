/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function (nums1, nums2) {
  let n = nums1.length;
  let m = nums2.length;

  let left = 0,
    right = 0;
  for (let i = 0; i < n; i++) {
    if (nums2.includes(nums1[i])) {
      left++;
    }
  }

  for (let i = 0; i < m; i++) {
    if (nums1.includes(nums2[i])) {
      right++;
    }
  }

  return [left, right];
};
console.log(
  findIntersectionValues(
    (nums1 = [4, 3, 2, 3, 1]),
    (nums2 = [2, 2, 5, 2, 3, 6])
  )
);
