/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let arrStr = s.split(" ").filter((e) => {
    return e != "";
  });
  let rev = arrStr.reverse();
  return rev.join(" ");
};
console.log(reverseWords("  hello world  "));
