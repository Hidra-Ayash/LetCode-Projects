/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
  let res = 0,
    base = 1,
    m = 0,
    k = 0;

  while (n > 0) {
    k = n % 10;
    n = Math.floor(n / 10);
    if (k > 1) {
      res += (n + 1) * base;
    } else if (k < 1) {
      res += n * base;
    } else {
      res += n * base + m + 1;
    }
    m += k * base;
    base *= 10;
  }
  return res;
};
console.log(countDigitOne(1000000000));
