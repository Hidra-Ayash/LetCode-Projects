/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  let arr = [];
  let size = s.length;
  let dec = size;
  let inc = 0;
  for (let i = 0; i < size; i++) {
    if (s[i] == "I") {
      arr.push(inc);
      inc++;
    } else if (s[i] == "D") {
      arr.push(dec);
      dec--;
    }
    if (i == size - 1) {
      if (s[size - 1] == "I") {
        arr.push(inc);
      } else {
        arr.push(dec);
      }
    }
  }
  return arr;
};
console.log(diStringMatch("DDI"));
