/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  let binary;
  let BinArr = [];
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    binary = str.toString(2);
    BinArr.push(binary);
  }
  let count = 0;
  let countArr = new Set();
  let str;
  for (let i = 0; i < BinArr.length; i++) {
    str = BinArr[i];
    for (let j = 0; j < str.length; j++) {
      if (str[j] == "1") {
        count++;
      }
    }
    countArr.add([count, parseInt(str, 2)]);
    count = 0;
  }

  const countArrArray = Array.from(countArr);

  countArrArray.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });
  let finalArr = [];
  for (let i = 0; i < countArrArray.length; i++) {
    finalArr.push(countArrArray[i][1]);
  }
  return finalArr;
};
console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]));
