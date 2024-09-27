/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
  let number = num;
  let str = num + "";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (number % Number(str[i]) == 0) {
      count++;
    }
  }
  return count;
};
console.log(countDigits(1248));
