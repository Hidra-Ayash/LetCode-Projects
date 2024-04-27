/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  let read1 = [...word1].join("");
  let read2 = [...word2].join("");
  return read1 == read2;
};
console.log(arrayStringsAreEqual(["h", "l"], ["h", "l"]));
