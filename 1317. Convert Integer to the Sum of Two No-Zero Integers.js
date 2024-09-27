/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {
  let a = 0,
    b = 0;
  let res = 0;
  let arr = [];
  for (let i = 1; i <= n; i++) {
    a = i + "";
    b = n - i + "";

    if (!a.includes("0") && !b.includes("0")) {
      res = Number(a) + Number(b);
      if (res == n) {
        arr.push(Number(a), Number(b));
        break;
      }
    }
  }
  return arr;
};
console.log(getNoZeroIntegers(1010));
