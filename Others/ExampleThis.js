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
