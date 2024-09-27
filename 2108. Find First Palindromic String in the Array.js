/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  let str = "";
  let arr = [];
  for (let i = 0; i < words.length; i++) {
    str = words[i];
    for (let j = 0; j <= str.length; j++) {
      if (str[j] == str[str.length - 1 - j]) {
        arr.push(str);
      }
      break;
    }
  }
  return arr[0] || "";
};
console.log(firstPalindrome((words = ["notapalindrome", "racecar"])));
