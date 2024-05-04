/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function (s) {
  let arr = [...s];
  let size = arr.length;
  let strNum = [];
  for (let i = 0; i < size; i++) {
    strNum.push(arr[i].charCodeAt(0));
  }

  for (let i = 0; i < strNum.length; i++) {
    if (strNum[i] < strNum[strNum.length - i - 1]) {
      strNum[strNum.length - i - 1] = 0;
      strNum[strNum.length - i - 1] += strNum[i];
    }
  }
  let res = [];
  for (let i = 0; i < strNum.length; i++) {
    res.push(String.fromCharCode(strNum[i]));
  }
  return res.join("");
};
console.log(makeSmallestPalindrome("egcfe"));
