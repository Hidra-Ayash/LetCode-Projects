/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = prices[0];
  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(prices[i], min);
    max = Math.max(max, prices[i] - min);
  }
  return max;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
