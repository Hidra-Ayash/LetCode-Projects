/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  arr.sort((a, b) => a - b);
  let mapArr = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      count++;
    }
    if (arr[i] != arr[i + 1]) {
      mapArr.push(count);
      count = 0;
    }
  }
  mapArr.sort((a, b) => a - b);
  for (let i = 0; i < mapArr.length; i++) {
    if (mapArr[i] == mapArr[i + 1]) {
      count++;
    }
  }
  if (count > 0) {
    return false;
  } else return true;
};
