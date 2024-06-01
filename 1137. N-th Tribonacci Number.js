/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  let arr = [0, 1, 1];
  for (let i = 0; i < n; i++) {
    arr[i + 3] = arr[i] + arr[i + 1] + arr[i + 2];
    arr.push(arr[i + 3]);
  }
  return arr[n];
};
console.log(tribonacci(4));//T[0]=0 , T[1]=1 , T[2]=1 , T[3]=2 , T[4]=4
