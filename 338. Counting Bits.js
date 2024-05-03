/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let nums = [];
  for (let i = 0; i <= n; i++) {
    nums.push(i.toString(2));
  }
  let s,
    count = 0;
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    s = nums[i];
    for (let j = 0; j < s.length; j++) {
      if (s[j] == "1") count++;
    }
    arr.push(count);
    count = 0;
  }
  return arr;
};
console.log(countBits(5));
