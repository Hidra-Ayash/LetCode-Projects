/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let arr = [];
  let copyArr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "I") {
      arr.push(1);
    } else if (s[i] == "V") {
      arr.push(5);
    } else if (s[i] == "X") {
      arr.push(10);
    } else if (s[i] == "L") {
      arr.push(50);
    } else if (s[i] == "C") {
      arr.push(100);
    } else if (s[i] == "D") {
      arr.push(500);
    } else if (s[i] == "M") {
      arr.push(1000);
    }
  }
  if (arr.length == 1) {
    return arr[0];
  }
  copyArr = [...arr];
  let sum = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] >= arr[i + 1]) {
      sum += arr[i];
    } else if (arr[i] < arr[i + 1]) {
      sum += arr[i + 1] - arr[i];
      arr.splice(i, 1);
    }
  }
  if (copyArr[copyArr.length - 1] <= copyArr[copyArr.length - 2]) {
    sum += copyArr[copyArr.length - 1];
  }
  return sum;
};
console.log(romanToInt("I"));
