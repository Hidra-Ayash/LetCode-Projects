//Question Interview in Microsoft and Google
//Input: [1 , 2 , 3 , 4]
//OutPut: [24, 12 , 8 , 6]
/**
 *
 * @param {Array} arr
 */

var leftRight = function (arr) {
  let multi = 1;
  let res = [];
  let elm = 0;
  for (let i = 0; i < arr.length; i++) {
    elm = arr[i];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] != elm) {
        multi *= arr[j];
      }
    }
    res.push(multi);
    multi = 1;
  }
  return res;
};
console.log(leftRight([1, 2, 3, 4]));
