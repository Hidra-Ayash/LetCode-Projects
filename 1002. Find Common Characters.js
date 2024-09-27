/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  let arr = [];
  let mapArr = new Map();
  arr.sort();
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    arr = [...words[i]];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] == arr[j + 1]) {
        count++;
        mapArr.set(arr[j], count);
      } else {
        mapArr.set(arr[j], 1);
      }
    }
  }
  console.log(mapArr);
  let res = [];
  for (let elm of mapArr) {
    if (elm[1] >= words.length) {
      res.push(elm[0]);
      if (elm[1] === words.length * 2) {
        res.push(elm[0]);
      }
    }
  }
  //   return res;
};
console.log(commonChars(["cool", "lock", "cook"]));
