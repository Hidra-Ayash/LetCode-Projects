/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
  let mapPos = new Map();
  let count1 = 1,
    count2 = 1;
  position.sort((a, b) => a - b);
  for (let i = 0; i < position.length - 1; i++) {
    if (position[i] == position[i + 1]) {
      count1++;
      mapPos.set(position[i], count1);
    } else if (i != 0) {
      count1 = 1;
      mapPos.set(position[i + 1], count2);
    } else if (i == 0 && position[i] != position[i + 1]) {
      mapPos.set(position[i], 1);
    }
  }
  let res = [...mapPos];
  res.sort((a, b) => a[1] - b[1]);
  console.log(res);
  return res[0][1];
};
console.log(minCostToMoveChips([2, 3, 3]));
