/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n) {
  let str = n + "";
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (i % 2 == 0) {
      sum += Number(str[i]);
    } else if (i % 2 != 0) {
      sum -= Number(str[i]);
    }
  }
  return sum;
};
console.log(alternateDigitSum(886996));
