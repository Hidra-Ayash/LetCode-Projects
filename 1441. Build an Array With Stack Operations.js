/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  let arr = [...target];
  let stack = [];
  let index = 0;
  for (let i = 0; i < n && index < arr.length; i++) {
    console.log(index);
    if (i + 1 == arr[index]) {
      stack.push("Push");
      index++;
    } else {
      stack.push("Push");
      stack.push("Pop");
    }
  }

  return stack;
};
console.log(buildArray((target = [1, 3]), (n = 3)));
