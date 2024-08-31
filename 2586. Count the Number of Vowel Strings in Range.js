/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function (words, left, right) {
  let count = 0;

  for (let i = left; i <= right; i++) {
    if (i === words.length) {
      break;
    }

    let elm = words[i];
    if (
      (elm[elm.length - 1] == "a" ||
        elm[elm.length - 1] == "e" ||
        elm[elm.length - 1] == "i" ||
        elm[elm.length - 1] == "o" ||
        elm[elm.length - 1] == "u") &&
      (elm[0] == "a" ||
        elm[0] == "e" ||
        elm[0] == "i" ||
        elm[0] == "o" ||
        elm[0] == "u")
    ) {
      count++;
    }
  }
  return count;
};
