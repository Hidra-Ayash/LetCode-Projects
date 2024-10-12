/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  if (points.length <= 2) {
    return points.length;
  }
  let count = 2;
  for (let i = 0; i < points.length - 1; i++) {
    const slopCount = {};
    let X1 = points[i][0];
    let Y1 = points[i][1];

    for (let j = i + 1; j < points.length; j++) {
      let X2 = points[j][0];
      let Y2 = points[j][1];
      const slope = X1 === X2 ? "Infinity" : (Y2 - Y1) / (X2 - X1);
      slopCount[slope] = (slopCount[slope] || 1) + 1;
      count = Math.max(slopCount[slope], count);
    }
  }
  return count;
};
console.log(
  maxPoints([
    [1, 1],
    [3, 2],
    [5, 3],
    [4, 1],
    [2, 3],
    [1, 4],
  ])
);
