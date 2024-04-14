const object1 = {
  name: "Arto Hellas",
  age: 35,
  education: "PhD",
};

const object2 = {
  name: "Full Stack Web Application Development",
  level: "Intermediate Studies",
  size: 5,
};

const object3 = {
  name: {
    first: "Dan",
    last: "Abramov",
  },
  grades: [2, 3, 5, 3],
  department: "Stanford University",
};

console.log(object1.name);
const currentAge = "age"; // Changing properties of the object;
console.log(object1[currentAge]);

// Adding new elements to the object
object1.address = "Helsinki";
object1["secret number"] = 12345;

console.log(object1.address);
console.log(object1["secret number"]);
