/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
  let ascii = [];

  for (let i = 0; i < s.length; i++) {
    ascii.push(s[i].charCodeAt());
  }
  let res = 0;
  for (let i = 0; i < ascii.length - 1; i++) {
    res += Math.abs(ascii[i] - ascii[i + 1]);
  }
  return res;
};
console.log(scoreOfString("hello"));
