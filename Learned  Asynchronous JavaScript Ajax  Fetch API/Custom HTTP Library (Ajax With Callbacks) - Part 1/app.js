const http = new easyHTTP; //call object easyHttp

// Get Posts
http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) { //this is callback
  if(err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});
