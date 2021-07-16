// Destructuring Assignment
// get the data from the same name 
let a, b;
[a, b] = [100, 200];
// Rest pattern
[a, b, c, ...rest] = [100, 200, 300, 400, 500];
/* 
to get the rest of values put this 
...variable : 3 points and variable
*/
({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
({ a, b, ...variable} = { y: 100, z: 200, c: 300, d: 400, e: 500 });
// must be the same name to get variables 
// a get a , b get b .....
// not a get y and not b get z 
console.log(a,b,variable);
// Array Destructuring

// const people = ['John', 'Beth', 'Mike'];

// const [person1, person2, person3] = people;

// console.log(person1, person2, person3);

// Parse array returned from function
// function getPeople() {
//   return ['John', 'Beth', 'Mike'];
// }

// let person1, person2, person3;
// [person1, person2, person3] = getPeople();

// console.log(person1, person2, person3);

// Object Destructuring

const person = {
  name: 'John Doe',
  age: 32,
  city: 'Miami',
  gender: 'Male',
  sayHello: function(){
    console.log('Hello');
  }
}

// Old ES5
// const name = person.name,
//       age = person.age,
//       city = person.city;

// New ES6 Destructuring
const { name, age, cc, sayHello } = person;
// in this case : cc not in  person so we get undifined 
console.log(name, age, cc);

sayHello();