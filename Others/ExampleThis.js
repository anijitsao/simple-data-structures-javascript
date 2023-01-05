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
// when all operands are truthy result right most truthy

// prints "3 && 4: 4"
console.log("3 && 4: ", 3 && 4);

// when all operands are truthy result right most truthy
// prints "3 && 4: 0"
console.log("0 && 4: ", 3 && 0);
