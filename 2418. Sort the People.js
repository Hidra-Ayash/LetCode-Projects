/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  let hashMap = new Map();
  for (let i = 0; i < heights.length; i++) {
    hashMap.set(heights[i], i);
  }
  let sortMap = [...hashMap].sort((a, b) => b[0] - a[0]);
  let arrRes = [];
  for (let elm of sortMap) {
    arrRes.push(names[hashMap.get(elm[0])]);
  }
  return arrRes;
};

console.log(
  sortPeople((names = ["Alice", "Bob", "Bob"]), (heights = [155, 185, 150]))
);
