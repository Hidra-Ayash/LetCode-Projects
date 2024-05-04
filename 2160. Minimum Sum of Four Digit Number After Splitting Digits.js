/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
  let n = num + "";
  let arr = [];
  for (let i = 0; i < n.length; i++) {
    arr.push(Number(n[i]));
  }
  let temp = 0;
  arr.sort((a, b) => a - b);
  for (let j = 1; j < 2; j++) {
    if (arr[j] < arr[j + 1]) {
      temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
  let n1 = String(arr[0]) + String(arr[1]);
  let n2 = String(arr[2]) + String(arr[3]);

  return Number(n1) + Number(n2);
};
console.log(minimumSum(4009));
