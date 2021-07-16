/*
Promise(function(resolve, reject){}) :is call back defined by JS to use 
 resolve in then : when success ; reject in catch :when get error
return Promise and we trait this by : 

FunctionName_that_return_Promise(Data_Or_ParameterOfFunction)
.then(FunctionName_To_Use__resolve_for_example_is_getPosts)
.catch(function(err) {
	//this function of reject of promise
  console.log(err);
});


its seems like dart like future maybe or maybe not

*/


const posts = [
  {title: 'Post One', body:'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

function createPost(post) {
  return new Promise(function(resolve, reject){
    setTimeout(function() {
      posts.push(post);

      const error = false;

      if(!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'})
.then(getPosts)
.catch(function(err) {
  console.log(err);
});
