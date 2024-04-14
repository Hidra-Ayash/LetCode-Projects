/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let heights2 = [];
   for(let i=0;i<heights.length;i++){
    heights2.push(heights[i])
   }
  let expected = heights.sort((a, b) => a - b);
  let check = 0;
  for (let i = 0; i < heights2.length; i++) {
    if (heights2[i] != expected[i]) {
      check++;
    }
  }
  return check;
};
console.log(heightChecker([1, 1, 4, 2, 1, 3]));
