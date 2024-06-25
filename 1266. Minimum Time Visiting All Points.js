/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
  //   let sub1 = 0,
  //     sub2 = 0;
  //   let pointSub = [];
  //   let arrSubMax = [];
  //   for (let i = 0; i < points.length; i++) {
  //     let elm1 = points[i];
  //     let elm2 = points[i + 1];
  //     for (let j = 0; j < 2; j++) {
  //       sub1 = Math.abs(elm1[0] - elm2[0]);
  //       sub2 = Math.abs(elm1[1] - elm2[1]);
  //       let max = Math.max(sub1, sub2);
  //       pointSub.push(max);
  //     }
  //   }
  //   return pointSub;

  let pointArray = [];
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < 2; j++) {
      pointArray.push(points[i][j]);
    }
  }
  let xArray = [];
  let yArray = [];
  let subArray = [];
  for (let i = 0; i < pointArray.length; i++) {
    if (i == pointArray.length - 2) {
      break;
    }
    if (i % 2 == 0) xArray.push(Math.abs(pointArray[i] - pointArray[i + 2]));
    else if (i % 2 != 0 && i !== pointArray.length - 2)
      yArray.push(Math.abs(pointArray[i] - pointArray[i + 2]));
  }
  let max1 = 0,
    res = 0;
  for (let i = 0; i < xArray.length; i++) {
    max1 = Math.max(xArray[i], yArray[i]);
    res += max1;
  }
  return res;
};
console.log(
  minTimeToVisitAllPoints([
    [559, 511],
    [932, 618],
    [-623, -443],
    [431, 91],
    [838, -127],
    [773, -917],
    [-500, -910],
    [830, -417],
    [-870, 73],
    [-864, -600],
    [450, 535],
    [-479, -370],
    [856, 573],
    [-549, 369],
    [529, -462],
    [-839, -856],
    [-515, -447],
    [652, 197],
    [-83, 345],
    [-69, 423],
    [310, -737],
    [78, -201],
    [443, 958],
    [-311, 988],
    [-477, 30],
    [-376, -153],
    [-272, 451],
    [322, -125],
    [-114, -214],
    [495, 33],
    [371, -533],
    [-393, -224],
    [-405, -633],
    [-693, 297],
    [504, 210],
    [-427, -231],
    [315, 27],
    [991, 322],
    [811, -746],
    [252, 373],
    [-737, -867],
    [-137, 130],
    [507, 380],
    [100, -638],
    [-296, 700],
    [341, 671],
    [-944, 982],
    [937, -440],
    [40, -929],
    [-334, 60],
    [-722, -92],
    [-35, -852],
    [25, -495],
    [185, 671],
    [149, -452],
  ])
);
