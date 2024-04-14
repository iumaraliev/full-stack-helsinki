const x = 1;
let y = 5;
console.log(x, y);
y += 10;
console.log(x, y);
y = "Some stupid text";
console.log(x, y);

const t = [1, -1, 2];
t.push(3);
console.log(t.length);
console.log(t[1]);

t.forEach((value) => {
  console.log(value);
});

// Copy array elements using concat method
const t2 = t.concat(5);

t2.forEach((value) => {
  console.log(value);
});

// The map() method of Array instances creates a
// new array populated with the results of calling
// a provided function on every element in the calling array.

const t3 = t2.map((value) => value * 2);
console.log(t3);

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [first, second, ...rest] = a;
console.log(first);
console.log(second);
console.log(rest);


