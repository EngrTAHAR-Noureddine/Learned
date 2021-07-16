document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

// Get local text file data
function getText() {
  fetch('test.txt')
    .then(function(res){ //return data from test.txt
      return res.text();
    })
    .then(function(data) { //second then of first then ex : data of first then is parameter of second data 
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(function(err){ // catch had a function to trait error
      console.log(err);
    });
}


// Get local json data
function getJson() {
  fetch('posts.json')
    .then(function(res){ //it's seem but with json
      return res.json(); //parse and represent like json 
    })
    .then(function(data) {
      console.log(data);
      let output = '';
      data.forEach(function(post) {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
      console.log(err);
    });
}


// Get from external API
function getExternal() {
  fetch('https://api.github.com/users')
    .then(function(res){ // like above 
      return res.json();
    })
    .then(function(data) {
      console.log(data);
      let output = '';
      data.forEach(function(user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
      console.log(err);
    });
}
