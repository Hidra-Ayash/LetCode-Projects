/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function (nums, k) {
  if (nums.length == 1) {
    return nums[0];
  }
  let maxElm = -1;
  let count = 0;
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let elm = nums[i];
    for (let j = i; j < k + i; j++) {
      res.push(nums[j]);
    }
  }
  let arr = [];
  for (let i = 0; i < res.length; i++) {
    if (res[i] != undefined) {
      arr.push(res[i]);
    }
  }
  arr.pop();
  let finArr = [];
  for (let i = 0; i < arr.length; i++) {
    finArr.push(arr[i]);
    if ((i + 1) % k == 0) {
      finArr.push("|");
    }
  }
  console.log(finArr);
  let resArr = [];
  for (let i = 0; i < finArr.length; i++) {
    if (finArr[i] < finArr[i + 1] && finArr[i] != "|") {
      if (finArr[i + 1] == "|") {
        resArr.push(finArr[i]);
      }
    } else if (
      finArr[i] > finArr[i + 1] ||
      (finArr[i] == finArr[i + 1] && finArr[i] != "|")
    ) {
      resArr.push(-1);
    }
  }
  let n = nums.length;
  let testArr = [];
  for (let i = 0; i < n - k + 1; i++) {
    testArr.push(resArr[i]);
  }
  return testArr;
};

console.log(resultsArray([1, 4], (k = 1)));
