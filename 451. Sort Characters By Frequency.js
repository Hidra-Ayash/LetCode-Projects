/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let res = [];

  for (let i = 0; i < s.length; i++) {
    res.push(s.charCodeAt(i));
  }
  const ansObj = {};
  for (let num of res) {
    ansObj[num] = (ansObj[num] || 0) + 1; //Get The Frequency of Element
  }

  let ans = {};
  let ansRes = [];
  ans = Object.entries(ansObj).sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < ans.length; i++) {
    let freq = ans[i];
    for (let i = 0; i < freq[1]; i++) {
      ansRes.push(freq[0]);
    }
  }
  return String.fromCharCode(...ansRes);
};

console.log(frequencySort("tree"));
