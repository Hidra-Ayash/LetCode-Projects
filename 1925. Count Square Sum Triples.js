/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function (n) {
  let a = 0,
    b = 0,
    c = 0,
    count = 0;
  for (let i = 1; i <= n; i++) {
    a = i;
    for (let j = i + 1; j <= n; j++) {
      b = j;
      for (let k = i + 2; k <= n; k++) {
        c = k;
        if (a * a + b * b == c * c) {
          count++;
        }
      }
    }
  }
  return count * 2;
};
console.log(countTriples(12));
