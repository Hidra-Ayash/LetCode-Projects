/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let res = 0;
  let sub = n;
  for (let i = 1; i <= n; i++) {
    sub -= i;
    if (sub < 0) {
      return i - 1;
    }
  }
};
console.log(arrangeCoins(5));
