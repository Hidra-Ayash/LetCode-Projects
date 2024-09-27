/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let strNumber = x + "";
  let arrStr = [];
  for (let i = 0; i < strNumber.length; i++) {
    if (strNumber[i] != "+" && strNumber[i] != "-") arrStr.push(strNumber[i]);
  }
  if (strNumber[0] == "-") {
    let num = Number(strNumber[0] + arrStr.reverse().join(""));
    if (num < Math.pow(-2, 31)) {
      return 0;
    }
    return num > Math.pow(2, 31) ? 0 : num;
  } else if (strNumber[0] != "-" && strNumber[strNumber.length - 1] != "0") {
    let num = Number(arrStr.reverse().join(""));
    if (num < Math.pow(-2, 31)) {
      return 0;
    }
    return num > Math.pow(2, 31) ? 0 : num;
  } else if (strNumber[strNumber.length - 1] == "0") {
    arrStr.pop();
    let num = Number(arrStr.reverse().join(""));
    if (num < Math.pow(-2, 31)) {
      return 0;
    }
    return num > Math.pow(2, 31) ? 0 : num;
  }
};
console.log(reverse(-153));
