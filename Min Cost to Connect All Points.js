/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  let n = points.length;
  const minCost = new Array(n).fill(Infinity);
  const visited = new Array(n).fill(false);
  let result = 0;
  minCost[0] = 0;
  for (let i = 0; i < n; i++) {
    let u = -1;
    for (let v = 0; v < n; v++) {
      if (!visited[v] && (u == -1 || minCost[v] < minCost[u])) {
        u = v;
      }
    }

    visited[u] = true;
    result += minCost[u];

    for (let j = 0; j < n; j++) {
      if (!visited[j]) {
        const cost =
          Math.abs(points[u][0] - points[j][0]) +
          Math.abs(points[u][1] - points[j][1]);

        minCost[j] = Math.min(minCost[j], cost);
      }
    }
  }
  return result;
};
console.log(
  minCostConnectPoints([
    [3, 12],
    [-2, 5],
    [-4, 1],
  ])
);
