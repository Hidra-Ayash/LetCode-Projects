/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
  let pillow = 1;
  let currentIndex = 0;
  let bol = false;
  while (currentIndex < time) {
    if (pillow === n) {
      bol = false;
    } else if (pillow == 1) {
      bol = true;
    }
    if (bol) {
      pillow++;
    } else {
      pillow--;
    }
    currentIndex++;
  }
  return pillow;
};
console.log(passThePillow(4, 5));
