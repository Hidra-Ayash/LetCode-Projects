/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
  let arrString = [];
  for (let i = low; i <= high; i++) {
    arrString.push(String(i));
  }
  let sum1 = 0,
    sum2 = 0;
  let elm;
  let count = 0;
  for (let i = 0; i < arrString.length; i++) {
    elm = arrString[i];
    for (let j = 0; j < elm.length / 2; j++) {
      sum1 += Number(elm[j]);
    }
    for (let k = elm.length / 2; k < elm.length; k++) {
      sum2 += Number(elm[k]);
    }

    if (sum1 == sum2 && sum1 != 0 && sum2 != 0) {
      count++;
    }
    sum1 = sum2 = 0;
  }
  return count;
};
console.log(countSymmetricIntegers((low = 1), (high = 100)));
