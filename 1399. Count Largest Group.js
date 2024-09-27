/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
  let singleArr = new Map();
  let doubleArr = new Map();
  let count1 = 0,
    count2 = 0;
  let res = 0;
  for (let i = 1; i <= n; i++) {
    res = i % 9;
    if (res != i && i % 9 != 0) {
      count1++;
      doubleArr.set(i, count1);
    } else if (res == i) {
      count2++;
      singleArr.set(i, count2);
    }
  }
  console.log(doubleArr);
  //   return doubleArr.size != 0 ? doubleArr.size : singleArr.size;
};
console.log(countLargestGroup(13));
