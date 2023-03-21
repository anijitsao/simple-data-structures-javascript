// this example shows uses of 'this' with arrow function
// and with normal function

const student = {
  name: "John Doe",
  arrowMethod: () => {
    // access this from parent
    console.log(`Hi ${this?.name}`);
  },
  normalMethod: function () {
    // access 'this' from calling object
    console.log(`Hi ${this.name}`);
  },
};

// Hi undefined
student.arrowMethod();

// Hi John Doe
student.normalMethod();

// 2. Logical AND demo
// when all operands are truthy result is right most truthy

// prints "3 && 4: 4"
console.log("3 && 4: ", 3 && 4);

// when some operands are falsy result is falsy
// prints "0 && 4: 0"
console.log("0 && 4: ", 0 && 4);

// Logical OR demo while using function call

function A() {
  console.log("called A");
  return true;
}
function B() {
  console.log("called B");
  return false;
}
/* Output:
  called B
  called A
  true
*/

console.log(B() || A());
