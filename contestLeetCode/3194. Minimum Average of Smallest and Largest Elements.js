/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function (nums) {
  let min = 0,
    max = 0;
  let arrAverage = [];
  nums.sort((a, b) => a - b);
  let size = nums.length;
  for (let i = 0; i < size; i++) {
    min = nums.shift();
    max = nums.pop();
    arrAverage.push((min + max) / 2);
    size -= 1;
  }
  return Math.min(...arrAverage);
};
console.log(minimumAverage([1, 2, 3, 7, 8, 9]));
