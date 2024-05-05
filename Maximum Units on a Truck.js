/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  let weightTrucks = 0;
  boxTypes.sort((a, b) => b[1] - a[1]);
  let bool = false;
  for (let i = 0; i < boxTypes.length; i++) {
    if (truckSize != 0 && truckSize > 0 && truckSize >= boxTypes[i][0]) {
      truckSize -= boxTypes[i][0];
      weightTrucks += boxTypes[i][1] * boxTypes[i][0];
      console.log([weightTrucks]);
    } else if (truckSize < boxTypes[i][0]) {
      weightTrucks += boxTypes[i][1] * truckSize;
      bool = true;
    }
    if (bool) {
      break;
    }
  }
  return weightTrucks;
};
console.log(
  maximumUnits(
    [
      [4, 2],
      [5, 5],
      [4, 1],
      [1, 4],
      [2, 5],
      [1, 3],
      [5, 3],
      [1, 5],
      [5, 5],
      [1, 1],
    ],
    24
  )
);
