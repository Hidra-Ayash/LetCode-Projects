//Object Data Of Student
const dataStudent = {
  name: ["Hidra", "Ahmed"],
  age: [20, 22],
  study: ["IT", "Medicine"],
};

function printData() {
  //Loop The Object by for
  for (let i = 0; i < 2; i++) {
    console.log(`The Name of Student (${i})` + " is : " + dataStudent.name[i]);
    console.log(`The Age of Student (${i})` + " is : " + dataStudent.age[i]);
  }
}
//Call The Function Print
printData();
