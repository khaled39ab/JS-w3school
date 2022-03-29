// JavaScript Function call()


// Method Reuse
// With the call() method, you can write a method that can be used on different objects.

// All Functions are Methods
// In JavaScript all functions are object methods.
// If a function is not a method of a JavaScript object, it is a function of the global object
const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  // This will return "John Doe":
  person.fullName();  

/* In the example above, this refers to the person object.
this.firstName means the firstName property of this.
Same as:
this.firstName means the firstName property of person. */


/* What is this?
In JavaScript, the this keyword refers to an object.
Which object depends on how this is being invoked (used or called).
The this keyword refers to different objects depending on how it is used:
In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object. */