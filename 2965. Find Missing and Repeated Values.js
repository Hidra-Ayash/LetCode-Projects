/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
  let arr = [];
  for (let i = 0; i < grid.length; i++) {
    let twoDArray = grid[i];
    for (let j = 0; j < twoDArray.length; j++) {
      arr.push(twoDArray[j]);
    }
  }
  let missing = 0,
    count = 0;
  let size = arr.length;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      count = arr[i];
      arr.splice(i, 1);
    }
  }
  for (let i = 0; i < size; i++) {
    if (arr[i] !== i + 1) {
      missing = i + 1;
      break;
    }
  }
  return [count, missing];
};

console.log(
  findMissingAndRepeatedValues([
    [1, 3],
    [2, 2],
  ])
);
