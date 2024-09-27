/**
 * @param {number[][]} nums
 * @return {number}
 */
var diagonalPrime = function (nums) {
  let check1 = 0,
    check2 = 0,
    count1 = 0,
    count2 = 0;
  let checkArr = [];

  for (let i = 0; i < nums.length; i++) {
    check1 = nums[i][i];
    check2 = nums[i][nums.length - i - 1];
    let sqr1 = 0,
      sqr2 = 0;

    sqr1 = Math.floor(Math.sqrt(check1));
    sqr2 = Math.floor(Math.sqrt(check2));

    if (sqr1 >= sqr2) {
      for (let j = 2; j <= sqr1; j++) {
        if (check1 % j == 0) {
          count1++;
        }
        if (check2 % j == 0) {
          count2++;
        }
      }
      if (count1 == 0) {
        checkArr.push(check1);
      }
      if (count2 == 0) {
        checkArr.push(check2);
      }
    } else if (sqr2 >= sqr1) {
      for (let j = 2; j <= sqr2; j++) {
        if (check1 % j == 0) {
          count1++;
        }
        if (check2 % j == 0) {
          count2++;
        }
      }
      if (count1 == 0) {
        checkArr.push(check1);
      }
      if (count2 == 0) {
        checkArr.push(check2);
      }
    }

    count1 = count2 = 0;
  }
  if (checkArr.length > 0 && Math.max(...checkArr) != 1) {
    return Math.max(...checkArr);
  } else {
    return 0;
  }
};
console.log(
  diagonalPrime([
    [1, 2, 3],
    [5, 6, 7],
    [9, 10, 11],
  ])
);
