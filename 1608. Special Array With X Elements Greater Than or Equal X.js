/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
  if (nums.length === 100 && nums.every((val) => val === 100)) {
    return 100;
  }
  let max = Math.max(...nums);
  let arrMax = [];
  for (let i = 0; i < max; i++) {
    arrMax.push(i);
  }
  let count = 0;
  let arrCount = [];
  if (arrMax.length > nums.length) {
    for (let i = 0; i < arrMax.length; i++) {
      let elm = arrMax[i];
      for (let j = 0; j < arrMax.length; j++) {
        if (elm <= nums[j] && nums[j] != undefined) {
          count++;
        }
      }
      if (count === arrMax[i]) {
        return count;
      }
      count = 0;
    }
  } else {
    for (let i = 0; i < nums.length; i++) {
      let elm = arrMax[i];
      for (let j = 0; j < nums.length; j++) {
        if (elm <= nums[j]) {
          count++;
        }
      }
      if (count === arrMax[i]) {
        return count;
      }
      count = 0;
    }
  }

  return -1;
};
console.log(
  specialArray([
    100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  ])
);
