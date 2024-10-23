/**
 * @param {number} n
 * @return {number}
 */
//this solution work but leet code crossed
// var trailingZeroes = function (n) {
//   let fa = fact(n);
//   let count = 0;
//   console.log(fa);
//   fa += "";
//   for (let i = fa.length - 1; i > 0; i--) {
//     if (fa[i] == "0") {
//       count++;
//     }
//     if (fa[i] != "0") {
//       break;
//     }
//   }
//   return count;
// };

// function fact(n) {
//   let result = BigInt(1);
//   for (let i = 2; i <= n; i++) {
//     result *= BigInt(i);
//   }
//   return result;
// }
var trailingZeroes = function (n) {
  let count = 0;
  for (let i = 5; i <= n; i *= 5) {
    count += Math.floor(n / i);
  }
  return count;
};
console.log(trailingZeroes(10000));
