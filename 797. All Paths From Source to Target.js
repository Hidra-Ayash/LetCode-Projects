/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  let size = graph.length - 1;
  let arrRes = [];
  const dfs = function (node, path) {
    if (node == size) {
      arrRes.push(path);
    }
    for (let childNode of graph[node]) {
      dfs(childNode, path.concat([childNode]));
    }
  };
  dfs(0, [0]);
  return arrRes;
};
console.log(
  allPathsSourceTarget((graph = [[4, 3, 1], [3, 2, 4], [3], [4], []]))
);
