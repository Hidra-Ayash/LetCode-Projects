/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function (batteryPercentages) {
  let count = 0;
  for (let i = 0; i < batteryPercentages.length; i++) {
    if (batteryPercentages[i] > 0) {
      for (let j = i + 1; j <= batteryPercentages.length - 1; j++) {
        batteryPercentages[j] = Math.max(0, batteryPercentages[j] - 1);
      }
      count++;
    }
  }
  return count;
};
console.log(countTestedDevices([0, 1, 2]));
