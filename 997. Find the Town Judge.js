/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  let trustJudge = new Array(n + 1).fill(0);
  let nontrustJudge = new Array(n + 1).fill(0);
  for (const [a, b] of trust) {
    nontrustJudge[a]++;
    trustJudge[b]++;
  }
  for (let i = 0; i < n; i++) {
    if (nontrustJudge[i] === n - 1 && trustJudge[i] === 0) {
      return i;
    }
  }
  return -1;
};
console.log(
  findJudge(4, [
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
    [4, 3],
  ])
);
