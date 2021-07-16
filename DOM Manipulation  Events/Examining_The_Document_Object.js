let val;

val = document; //is html all 
val = document.all;
val = document.all[2]; //body all
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain; //loopback
val = document.URL;
val = document.characterSet; //num of char in html all
val = document.contentType;

val = document.forms; //form input 
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links; //link is <a>
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images; //all tag <img> list

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src'));
});

console.log(val);