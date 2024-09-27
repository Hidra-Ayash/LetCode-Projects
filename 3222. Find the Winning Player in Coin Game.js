/**
 * @param {number} x
 * @param {number} y
 * @return {string}
 */
var losingPlayer = function (x, y) {
  let turns = Math.min(x, y / 4);
  let turnFloor = Math.floor(turns);
  return turnFloor % 2 == 1 ? "Alice" : "Bob";
};
console.log(losingPlayer(4, 11));
