/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let stack = [];
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      count++;
      stack.push(count);
    }
    if (s[i] === ")") {
      count--;
      stack.push(count);
    } else {
      return 0;
    }
  }

  return Math.max(...stack);
};
console.log(maxDepth("1"));
