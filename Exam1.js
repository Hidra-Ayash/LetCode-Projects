function sum(...args) {
  let total = 0;

  console.log(arr);
  for (const elm of args) {
    total += elm;
  }
  return total;
}
// console.log(sum(1, 2, 3, 4));
let arr = [1, 2, 3];
let combine = [...arr, 4, 5, 6];
// console.log(combine);
const obj = [
  { name: "Hidra", id: 2123 },
  { name: "Ali", id: 1159 },
];
// for (let { id, name } of obj) {
//   console.log(`The id Of ${name} is : ${id}`);
// }
let sumT = (x, y) => x + y;
console.log(sumT(1, 2));
const person = (name = "Hidra") => {
  return name;
};
console.log(person("Ali"));
