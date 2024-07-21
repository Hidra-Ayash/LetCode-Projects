/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let arrS = s.split("");
  let arrT = t.split("");
  let str = new Array(arrS.length).fill("");
  let index = 0;
  for (let i = 0; i < arrS.length; i++) {
    let elm = arrS[i];

    for (let j = 0; j < arrT.length; j++) {
      if (elm === arrT[j]) {
        str[j] = elm;
      }
    }
  }
  let S = str.join("");
  if (S.length - 1 === s.length && S[0] == s[0]) {
    return true;
  }
  console.log(S);
  return S === s || S.search(s) > 0 ? true : false;
};
console.log(isSubsequence());
