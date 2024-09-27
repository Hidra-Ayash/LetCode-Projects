/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let n = cost.length;
  let dp = new Array(n);
  dp[n - 1] = 0;
  for (let j = n - 1; j > 0; j--) {
    for (let i = 0; i < n; i++) {
      dp[j] = cost[j] + Math.min(dp[i + 1], dp[i + 2]);
      break;
    }
  }
  console.log(dp);
  return dp[1];
};
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
