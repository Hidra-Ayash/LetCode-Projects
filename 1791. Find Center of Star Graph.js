/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  let count = 0,
    arrRep = [],
    nodeCenter = 0;

  for (let i = 0; i < edges.length; i++) {
    for (let j = 0; j < edges[i].length; j++) {
      arrRep.push(edges[i][j]);
    }
  }
  arrRep.sort((a, b) => a - b);
  for (let i = 0; i < arrRep.length; i++) {
    if (arrRep[i] == arrRep[i + 1]) {
      count++;
      nodeCenter = arrRep[i];
    }
  }
  if (count > 0) return nodeCenter;
};
console.log(
  findCenter([
    [1, 2],
    [5, 1],
    [1, 3],
    [1, 4],
  ])
);
