/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let arr = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] == nums2[j]) {
        arr.push(nums1[i]);
      }
    }
  }
  let res = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != arr[i + 1]) {
      res.push(arr[i]);
    }
  }
  return res;
};
console.log(intersection((nums1 = [4, 9, 5]), (nums2 = [9, 4, 9, 8, 4])));
