/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  if (s.length == 1) {
    return 1;
  }
  let str = s.trimEnd();
  let st = "";
  let count = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] == " ") {
      st = str.slice(i + 1, str.length);
      count++;
    }
    if (count == 1) {
      break;
    } else {
      console.log(str[i]);
      st += str[i];
    }
  }
  return st.length;
};
console.log(lengthOfLastWord("day"));
