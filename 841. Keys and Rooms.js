/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  let keyArr = new Map();
  for (let i = 0; i < rooms.length; i++) {
    let key = rooms[i];
    if (key.length == 0) {
      keyArr.set(i, null);
    }
    for (let j = 0; j < key.length; j++) {
      keyArr.set(i, key[j]);
    }
  }
};
console.log(canVisitAllRooms([[1], [1]]));
