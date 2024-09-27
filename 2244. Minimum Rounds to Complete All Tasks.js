/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function (tasks) {
  let taskMap = new Map();
  let count = 1;
  tasks.sort((a, b) => a - b);
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i] == tasks[i + 1]) {
      count++;
    } else {
      taskMap.set(tasks[i], count);
      count = 1;
    }
  }
  console.log(taskMap);
  let resMap = 0;
  for (let elm of taskMap) {
    if (elm[1] > 1) {
      resMap += Math.ceil(elm[1] / 3);
    } else {
      resMap = 0;
      break;
    }
  }
  if (resMap >= taskMap.size) return resMap;
  else return -1;
};
console.log(
  minimumRounds([
    42, 43, 45, 47, 41, 42, 48, 43, 42, 45, 45, 46, 42, 43, 40, 39, 44, 48, 47,
    46, 43, 48, 46, 43, 44, 42, 46, 46,
  ])
);
