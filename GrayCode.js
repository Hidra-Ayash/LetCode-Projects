/**
 * @param {number} n
 * @return {number[]}
 */
//Gray Code
/**
 * A binary numbering system in which two successive values only differ by one
bit is called gray code, often referred to as reflected binary code or unit
distance code. Frank Gray created it in 1953, and today it is a common tool for
error detection and repair in digital communication and data storage systems.
The Gray code is a sequencing of the binary numeral system in which two
successive values differ in an only binary digits
   
 */
var grayCode = function (n) {
  if (n == 1) {
    return [0, 1];
  }
  let size = Math.pow(2, n) - 1;
  let arr = [];
  for (let i = 0; i <= size; i++) {
    let elm = i.toString(2);

    if (elm.length < n) {
      while (elm.length < n) {
        elm = "0" + elm;
      }
      arr.push(elm);
    } else {
      arr.push(elm);
    }
  }

  let res = [];
  if (n >= 1) {
    res = ["0", "1"];
  }
  console.log(arr);
  let xor = "";
  for (let i = 2; i < arr.length; i++) {
    let elm = arr[i];

    for (let j = 0; j < n; j++) {
      if (j == 0) {
        xor += elm[j];
      } else {
        xor += elm[j] ^ elm[j - 1];
      }
    }

    res.push(xor);
    xor = "";
  }
  let resXor = [];
  for (let i = 0; i < res.length; i++) {
    resXor.push(parseInt(res[i], 2));
  }
  return resXor;
};
console.log(grayCode(3));
