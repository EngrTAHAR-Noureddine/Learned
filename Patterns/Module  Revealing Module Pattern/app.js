// Basic structure

// (function() {
//   // Declare private vars and functions

//   return {
//     // Declare public var and functions
//   }
// })();

// STANDARD MODULE PATTERN
// const UICtrl = (function() {
//   let text = 'Hello World';

//   const changeText = function() {
//     const element = document.querySelector('h1');
//     element.textContent = text;
//   }

//   return {
//     callChangeText: function() {
//       changeText();
//       // console.log(text);
//     }
//   }
// })();

// UICtrl.callChangeText();
// // UICtrl.changeText();

// console.log(UICtrl.text);

// REVEALING MODULE PATTERN
// const ItemCtrl = (function() {
//   this.l = 'cccccc';
//   let data = [];
//   const t ='data';
//   var v = 'variable';
//   function add(item) {
//     data.push(item);
//     console.log('Item Added....');
//   }

//   function get(id) {
//     return data.find(item => {
//       return item.id === id;
//     });
//   }

//   return {
//     add: add,
//     get: get
//   }
// })();

function ItemCtrl() {
  this.l = 'cccccc';
  let data = [];
  const t ='data';
  var v = 'variable';
   this.add= function(item) {
    data.push(item);
    console.log('Item Added....');
  }

 this.get = (id)=>{
    return data.find(item => {
      return item.id === id;
    });
  }

  // return {
  //   add: add,
  //   get: get
  // }
}

/* function without 'this' all variables and subfunctions inside this function are private 
so if you want to return private variables of fucntion : using return to convert it to public if you have multi varibles use object 
if you using 'this' inside function you will converted to ES5 


*/
const t = new ItemCtrl();
t.add({id: 1, name: 'John'});



// ItemCtrl.add({id: 1, name: 'John'});
// ItemCtrl.add({id: 2, name: 'Mark'});
// console.log(ItemCtrl.get(2));
// console.log(ItemCtrl.l);