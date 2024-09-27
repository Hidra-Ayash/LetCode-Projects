/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  let mX = (coordinates[0][0] - coordinates[1][0]);
  let mY = (coordinates[0][1] - coordinates[1][1]);
  for (let i = 0; i < coordinates.length - 1; i++) {
    let mXCor = (coordinates[i][0] - coordinates[i + 1][0]);
    let mYCor = (coordinates[i][1] - coordinates[i + 1][1]);
    if (mXCor * mY != mYCor * mX) {
      return false;
    }
  }
  return true;
};
console.log(
  checkStraightLine([
    [-2, 12],
    [2, -8],
    [6, -28],
    [-10, 52],
    [-7, 37],
    [4, -18],
    [7, -33],
    [1, -3],
    [-1, 7],
    [8, -38],
  ])
);
