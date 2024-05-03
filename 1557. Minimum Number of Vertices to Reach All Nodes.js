/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {
  let vertices = new Map();
  let arr = [];
  for (let elm of edges) {
    vertices.set(elm[1], 1);
  }
  console.log(vertices);
  for (let i = 0; i < n; i++) {
    if (!vertices.has(i)) {
      arr.push(i);
    }
  }

  return arr;
};
console.log(
  findSmallestSetOfVertices(
    (n = 6),
    (edges = [
      [0, 1],
      [0, 2],
      [2, 5],
      [3, 4],
      [4, 2],
    ])
  )
);
