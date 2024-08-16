/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
  let sum = 0,
    count = 0;
  for (let i = 1; i <= num; i++) {
    let elm = i + "";
    for (let j = 0; j < elm.length; j++) {
      sum += Number(elm[j]);
    }
    if (sum % 2 == 0) {
      count++;
    }
    sum = 0;
  }
  return count;
};
console.log(countEven(4));
