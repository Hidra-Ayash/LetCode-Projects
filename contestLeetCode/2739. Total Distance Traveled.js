/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
var distanceTraveled = function (mainTank, additionalTank) {
  if (mainTank < 5) {
    return mainTank * 10;
  }
  let distance = 0;
  while (mainTank >= 5 && additionalTank > 0) {
    distance += 50;
    mainTank -= 5;
    mainTank += 1;
    additionalTank--;
  }
  console.log(mainTank);
  return distance + mainTank * 10;
};
console.log(distanceTraveled(9, 2));
