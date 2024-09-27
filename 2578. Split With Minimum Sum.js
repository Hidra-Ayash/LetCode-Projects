/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function (num) {
  let strNum = num + "";
  let evenArr = [];
  let oddArr = [];
  for (let i = 0; i < strNum.length; i++) {
    if (Number(strNum[i]) % 2 == 0 && Number(strNum[i]) != 0) {
      evenArr.push(Number(strNum[i]));
    } else if (strNum[i] % 2 != 0 && Number(strNum[i]) != 0) {
      oddArr.push(Number(strNum[i]));
    }
  }
  oddArr.sort((a, b) => a - b);
  evenArr.sort((a, b) => a - b);

  let even = 0,
    odd = 0;
  if (evenArr.length == 0) {
    for (let i = 0; i < oddArr.length; i++) {
      odd += oddArr[i];
    }
  } else if (oddArr.length == 0) {
    for (let i = 0; i < evenArr.length; i++) {
      even += evenArr[i];
    }
  } else {
    for (let i = 0; i < oddArr.length; i++) {
      odd += oddArr[i] + "";
    }
    for (let i = 0; i < evenArr.length; i++) {
      even += evenArr[i] + "";
    }
  }
  return Number(even) + Number(odd);
};
console.log(splitNum(999999999));
