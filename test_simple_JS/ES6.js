class Person {
    constructor(firstName, lastName, dob) {
      this.firstName = firstName; 
      /*u just use this in class don't define variables in out constructor*/
      this.lastName = lastName;
      this.birthday = new Date(dob);
    }
  
    greeting() {
      return `Hello there ${this.firstName} ${this.lastName}`;
    }
  
    calculateAge() {
      const diff = Date.now() - this.birthday.getTime();
      const ageDate = new Date(diff);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
  
    getsMarried(newLastName) {
      this.lastName = newLastName;
    }
  
    static addNumbers(x, y) {
      return x + y;
      /* it's seems like class singlton in flutter when using static */
    }
  }
  
  const mary = new Person('Mary', 'Williams', '11-13-1980');
  
  mary.getsMarried('Thompson');
  
  console.log(mary);
  
  console.log(Person.addNumbers(1,2));





/*second  */






  class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }
}

const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');

console.log(john.greeting());

console.log(Customer.getMembershipCost());