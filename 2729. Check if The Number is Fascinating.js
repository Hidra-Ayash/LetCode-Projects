/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function (n) {
  let m1 = 2 * n;
  let m2 = 3 * n;
  let number = n + "" + m1 + "" + m2;
  let arr = [...number];
  let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let arrTwo = [];
  for (let i = 0; i < arr.length; i++) {
    arrTwo.push(Number(arr[i]));
  }
  arrTwo.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < arrTwo.length; i++) {
    if (arrTwo[i] == testArr[i]) {
      count++;
    }
  }

  return count == testArr.length && testArr.length == arrTwo.length
    ? true
    : false;
};
console.log(isFascinating(100));
