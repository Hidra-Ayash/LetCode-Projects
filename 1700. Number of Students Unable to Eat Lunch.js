/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  let count = 0;
  while (students.length != count) {
    if (students[0] == sandwiches[0]) {
      sandwiches.shift();
      students.shift();
      count = 0;
    } else {
      let val = students.shift();
      students.push(val);
      count++;
    }
  }
  return students.length;
};
console.log(
  countStudents(
    (students = [1, 1, 1, 0, 0, 1]),
    (sandwiches = [1, 0, 0, 0, 1, 1])
  )
);
