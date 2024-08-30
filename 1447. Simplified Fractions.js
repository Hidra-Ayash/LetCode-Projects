/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function (n) {
  let res = new Set();
  let comp = [];
  let num;
  let elm = 0;
  for (let i = 1; i <= n; i++) {
    num = i;
    for (let j = 2; j <= n; j++) {
      elm = i / j;
      if (elm > 0 && elm < 1) {
        if (res.has(i / j)) break;
        res.add(i / j);
        comp.push(i + "/" + j);
      }
    }
  }
  return comp;
};
console.log(simplifiedFractions(4));
