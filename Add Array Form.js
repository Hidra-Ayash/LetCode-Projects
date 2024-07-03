/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  let strNumber = num.join("");
  let n1 = BigInt(strNumber);
  let n2 = BigInt(k);
  let sum = n1 + n2;
  let convertSum = sum + "";
  let resArray = [];
  console.log(sum);
  for (let i = 0; i < convertSum.length; i++) {
    resArray.push(Number(convertSum[i]));
  }
  return resArray;
};
console.log(
  addToArrayForm(
    (num = [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3]),
    (k = 516)
  )
);
