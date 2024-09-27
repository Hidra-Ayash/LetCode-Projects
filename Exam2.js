const person = {
  fname: "Hidra",
  lname: "Ayash",
};
// console.log(person.fname);
// person.id = 2123;
// person = { id: 2125 }; //TypeError
// console.log(person);
function c(x, y) {
  this.x = x;
  this.y = y;
  this.print = console.log(x, y);
}
// let c1 = new c(1, 2);
// c1.print;
// c1.z = 3;
// console.log(c1.z);
let numbers = [1, 2, 3];
let arr = [];
// for (const n of numbers) {
//   n *= 2;
//   arr.push(n);
// }
const Map = numbers.map((elm) => elm * 2);
console.log(Map);
