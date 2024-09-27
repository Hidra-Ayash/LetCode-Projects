/**
 * @param {number} n
 * @return {boolean}
 */
function numIsOne(n) {
  let sum = 0,
    digit = 0;
  while (n != 0) {
    digit = n % 10;
    sum += digit * digit;
    n = Math.floor(n / 10);
  }
  return sum;
}

var isHappy = function (n) {
  let set = new Set();
  while (true) {
    n = numIsOne(n);

    if (n == 1) return true;
    if (set.has(n)) {
      return false;
    }
    set.add(n);
  }
};
console.log(isHappy(19));
