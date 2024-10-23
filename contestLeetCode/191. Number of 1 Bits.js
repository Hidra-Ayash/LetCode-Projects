/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  let binaryNum = n.toString(2);
  let countBit = 0;
  for (let i = 0; i < binaryNum.length; i++) {
    if (binaryNum[i] == "1") {
      countBit++;
    }
  }
  return countBit;
};
console.log(hammingWeight(11));
