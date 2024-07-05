/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let pascalTriangle = [[1]];
  for (let i = 0; i < rowIndex; i++) {
    const newRow = [1];
    let elm = pascalTriangle[i];
    for (let j = 0; j < elm.length - 1; j++) {
      newRow.push(elm[j] + elm[j + 1]);
    }
    newRow.push(1);
    pascalTriangle.push(newRow);
  }
  return pascalTriangle[rowIndex];
};
console.log(getRow(3));
