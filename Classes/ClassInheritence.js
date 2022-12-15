// this example shows class inheritence in JavaScript along with
// use of method overriding, super keyword
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log("Hello", this.name);
  }

  status() {
    console.log(`Hello ${this.name} how are you ?`);
  }
}

class Student extends Person {
  constructor(name, profession) {
    // Must call super constructor in derived class before accessing 'this'
    super(name); // access/supply Parent's property name
    this.profession = profession || "student";
  }

  // method overriding
  status() {
    console.log(`Hello Student ${this.name} how are you ?`);
  }
}

// initializing the object with a name
const student1 = new Student("John Doe");

// prints { name: 'John', profession: 'student' }
// in Browser it will show the Prototype
console.log("student1", student1);

// prints Hello John Doe
student1.greet();

// prints Hello Student John Doe how are you ?
student1.status();
