/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
  let size = piles.length / 3;
  let res = 0;
  piles.sort((a, b) => b - a);
  for (let i = 1; i < piles.length - size; i += 2) {
    res += piles[i];
  }
  return res;
};
console.log(maxCoins([9, 8, 7, 6, 5, 1, 2, 3, 4]));
