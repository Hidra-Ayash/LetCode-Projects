/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function (s, k) {
  let strArr = [...s];
  if (k === 1) {
    let size = s.length;
    let twoStr = s + s;
    let compStr = s;

    for (let i = 1; i < size; i++) {
      let str = twoStr.substr(i, size);
      if (str < compStr) {
        compStr = str;
      }
    }
    return compStr;
  } else {
    return strArr.sort().join("");
  }
};
console.log(orderlyQueue((s = "zmwguo"), (k = 1)));
