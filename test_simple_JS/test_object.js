/* this is ES5 how its works  */

// Person constructor
function Person(name, dob) {
    this.name = name;
    // this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = function(){
      const diff =  Date.now() - this.birthday.getTime();
      const ageDate = new Date(diff);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
  }
  
  // const brad = new Person('Brad', 36);
  // const john = new Person('John', 30);
  
  // console.log(john.age);
  
  const brad = new Person('Brad', '9-10-1981');
  console.log(brad.calculateAge());


/* 
Customer get from ==> Person
but Person didn't get from Customer
*/


// Person constructor
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.message = function(){
        return `Hi ${this.firstName}! it's sunny ! `
    }
  }
  
  // Greeting
  Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
  Person.prototype.getName = function(){
    return `this is ${this.firstName}`;
  }
   const person1 = new Person('John', 'Doe');
  
   console.log(person1.message());
  
  // Customer constructor
  function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);
  
    this.phone = phone;
    this.membership = membership;
  }
  
  // Inherit the Person prototype methods
  Customer.prototype = Object.create(Person.prototype);
  
  // Make customer.prototype return Customer()
  Customer.prototype.constructor = Customer;
  
  // Create customer
  const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');
  
  //console.log(customer1);
  
  // Customer greeting
  Customer.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
  }
  Customer.prototype.showSth = function(){
    return `TAHAR Noureddine`;
  }
  console.log(customer1.greeting());
  console.log(customer1.getName());
  console.log(customer1.showSth());
  console.log(customer1.message());
  console.log('*********************');
  console.log(person1);
  console.log(customer1);

const personPrototypes = {
    greeting: function() {
      return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName) {
      this.lastName = newLastName;
    }
  }
  
  const mary = Object.create(personPrototypes);
  mary.firstName = 'Mary';
  mary.lastName = 'Williams';
  mary.age = 30;
  
  mary.getsMarried('Thompson');
  
  console.log(mary);
  console.log("***************************");
  /* Object.create(prototype , defined_Object )
    prototype must be like personPrototypes or null 
    defined_Object must be like {
    firstName: {value: 'Brad'}, //exactly {value:something_here}
    lastName: {value: 'Traversy'},//exactly {value:something_here}
    age: {value: 36}//exactly {value:something_here}
  } or don't put anything
  
  */

  const brad = Object.create(null, {
    firstName: {value: 'Brad'},
    lastName: {value: 'Traversy'},
    age: {value: 36}
  });
  
  console.log(brad);
  
 