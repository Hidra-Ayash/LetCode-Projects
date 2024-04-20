/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
  let move = 0;
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);
  for (let i = 0; i < seats.length; i++) {
    if (seats[i] != students[i]) {
      move += Math.abs(seats[i] - students[i]);
    }
  }
  return move;
};
console.log(minMovesToSeat((seats = [2, 2, 6, 6]), (students = [1, 3, 2, 6])));
