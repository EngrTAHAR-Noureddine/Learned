// SETS - Store unique values of any type

const set1 = new Set();
const sy = Symbol();
const obj = {name: 'dayan'};
// Add values to set
set1.add(100);
set1.add('A string');
set1.add({name: 'John'});
set1.add(true);
set1.add(100);
set1.add(nour);
set1.add(sy);
set1.add(obj);

function nour(){
    const n = "nn";
}


// const set2 = new Set([1, true, 'string']);
// console.log(set2);

// console.log(set1);

// Get count
// console.log(set1.size);

// Check for values
console.log(set1.has(nour));
console.log(set1.has(sy));
console.log(set1.has(obj));
console.log(set1.has({name: 'John'}));
console.log({name: 'John'}==={name: 'John'});
// console.log(set1.has(50 + 50));
// console.log(set1.has({name: 'John'}));

// Delete from set
// set1.delete(100);

// console.log(set1);

// ITERATING THROUGH SETS

// For..of 
// for(let item of set1) {
//   console.log(item);
// }

// ForEach Loop
// set1.forEach((value) => {
//   console.log(value);
// });

// CONVERT SET TO ARRAY
const setArr = Array.from(set1);
console.log(setArr);
