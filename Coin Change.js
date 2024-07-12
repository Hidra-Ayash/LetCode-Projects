/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let dpArray = new Array(amount + 1).fill(Infinity);
  dpArray[0] = 0;
  for (let coin of coins) {
    for (let elm = coin; elm <= amount; elm++) {
      dpArray[elm] = Math.min(dpArray[elm], dpArray[elm - coin] + 1);
    }
  }
  return dpArray[amount] == Infinity ? -1 : dpArray[amount];
};
console.log(coinChange([1], 2));
