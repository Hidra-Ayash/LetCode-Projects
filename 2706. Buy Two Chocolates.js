/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {
  let sum = 0;
  prices.sort((a, b) => a - b);
  if (prices[0] + prices[1] == money) {
    sum = prices[0] + prices[1];
  }
  if (sum == 0) {
    return money;
  }
  return Math.abs(sum - money);
};
console.log(buyChoco((prices = [98, 54, 6, 34, 66, 63, 52, 39]), (money = 22)));
