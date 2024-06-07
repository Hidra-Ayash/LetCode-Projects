/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  let arr = [];
  let pow = 1;
  let sum = 0;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] != "C" && operations[i] != "D" && operations[i] != "+") {
      arr.push(Number(operations[i]));
    } else if (operations[i] == "C") {
      arr.pop();
    } else if (operations[i] == "D") {
      pow = arr[arr.length - 1] * 2;
      arr.push(pow);
    } else if (operations[i] == "+") {
      sum += arr[arr.length - 1] + arr[arr.length - 2];
      arr.push(sum);
    }
    sum = 0;
  }
  for (let j = 0; j < arr.length; j++) {
    sum += arr[j];
  }
  return sum;
};
console.log(calPoints(["1", "C"]));
