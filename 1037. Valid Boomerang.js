/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function (points) {
  let mX = points[0][0] - points[1][0];
  let mY = points[0][1] - points[1][1];

  for (let i = 0; i < 2; i++) {
    let mileX = points[i][0] - points[i + 1][0];
    let mileY = points[i][1] - points[i + 1][1];
    console.log(mX * mileY, mY * mileX);
    if (mX * mileY != mY * mileX) {
      return true;
    }
  }
  return false;
};
console.log(
  isBoomerang([
    [1, 1],
    [2, 2],
    [3, 3],
  ])
);
