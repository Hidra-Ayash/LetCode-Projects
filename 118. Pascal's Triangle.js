/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let arrPascal = [[1]];
  for (let i = 1; i < numRows; i++) {
    let previousArray = arrPascal[arrPascal.length - 1];
    let newArrayPascal = [1];
    for (let j = 0; j < previousArray.length - 1; j++) {
      newArrayPascal.push(previousArray[j] + previousArray[j + 1]);
    }
    newArrayPascal.push(1);
    arrPascal.push(newArrayPascal);
  }
  return arrPascal;
};
console.log(generate(6));
