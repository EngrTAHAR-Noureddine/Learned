console.log({a:1,b:2});
console.table({a:1,b:2});//show in table 

console.time('hello');//hello is Id  begin of section
console.log({a:1,b:2});
console.log({a:1,b:2});
console.log({a:1,b:2});
console.log({a:1,b:2});
console.log({a:1,b:2});
console.log({a:1,b:2});
console.timeEnd('hello');//end of section 
//                     //and in the end show time that took
// let like; var like; //meme
const name=3; //constant not variable
const array=[1,2,3];// you can change inside like add to array 
// //but you can't assign array to new array
const object={a:2,b:3}; //the same with array change inside
// // not assign object

// /*************************   */
let v=5;//number
let g= String(20); //alll type convert to string
let  b= String(true);
let r = (5).toString();//all type convert to string

let num =Number("23");//string to number
let u = Number(true); //give 1 and false give 0
let o = Number("hello");// give NaN and array give it
let y = parseInt('34.89');//convert to number decimal (without 0.89)
r = parseFloat('34.89');
// //** Put some code of html in doc*//
// //without ES6 

const allName = "TAHAR Noureddine";
const age = "22";
let html = '<ul> <li> Name : '+allName+'</li><li> Age : '+age+'</li></ul>';

document.body.innerHTML = html;

// or ES6 with backtick (`) using keys : alt gr + 7
let css=`
    <ul>
    <li>Name ${allName} </li>
    <li> age : ${age} </li>
    </ul>

        `;

document.body.innerHTML =css;
//array the item ; you can change type of item like python
//check if array or not : let v = Array.isArray(); //true or false

let myArray = [1,2,"st"];
myArray.push(3);//add in the end 
myArray.unshift(100);//add on to front
myArray.pop(); //remove the last item
myArray.shift();//remove front 
myArray.splice(1,1); //first 1 for index second 1 for how much item to remove
myArray.reverse();//reverse array
myArray.sort();// ordering alphabitic
//myArray.concat(anotherArray);
function under50(num){
    return num<50;
}

myArray.find(under50);//find the first number under 50

/** Object */

let myObject={
    maths:34 //can you add function
};
let getObject = myObject.maths;//recomanded
let getObject = myObject["maths"];//the same and you can add .maths.some.some.some to get inside the tree
/**Date ************** */
const birthday = new Date('11-2-1999 12:23:00');//set date
birthday = new Date('November 2 1999'); 
birthday = new Date('11/2/1999');

const now=new Date(); // date now

let month = now.getMonth();//month
let day =now.getDate();//day
//Immidiatley Invokable Function Expressions -IIFEs
// run function immediately
(function(namefun){console.log("hello "+namefun);})('brad');//(for function)(parameters);

/* Window */
// WINDOW METHODS / OBJECTS / PROPERTIES

// Alert
//alert('Hello World');

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if(confirm('Are you sure')){
//   console.log('YES');
// } else {
//   console.log('NO');
// }

let val;

// Outter height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
//window.location.href = 'http://google.com';
//Reload
//window.location.reload();

// History Object

// window.history.go(-2);
// val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;



console.log(val);
//****************************************************** */
// Global Scope
var a = 1;
let b = 2;
const c = 3;

// function test() {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Function Scope: ', a, b, c);
// }

// test();

// if(true) {
//   // Block Scope
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('If Scope: ', a, b, c);
// }

// for(var a = 0; a < 10; a++) {
//   console.log(`Loop: ${a}`);
// }

console.log('Global Scope: ', a, b, c);
//***************************************************************** */
