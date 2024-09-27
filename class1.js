class personData {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
  printData() {
    console.log(`Name Person: ${this.name} And ID : ${this.id}`);
  }
}
class data extends personData {
  constructor(phone, email) {
    super("ttt", 6532);
    this.phone = phone;
    this.email = email;
  }
  printEmail() {
    console.log(`Email is : ${this.email} of ${this.name}`);
  }
}
let p1 = new personData("Hidra", 24564);
let p2 = new data("05646", "fdsf@gamil.com");
p2.printEmail();
p1.printData();
