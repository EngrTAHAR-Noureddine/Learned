document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create an XHR Object
  /* there is XHR and API 
  xhr : is just request and response without traits request XMLHttpRequest and response is Text, or Xml or json 
  its seeems like client-sever 
  
   */
  const xhr = new XMLHttpRequest();

  // OPEN obligated 
  xhr.open('GET', 'data.txt', true);

  // console.log('READYSTATE', xhr.readyState);

  // Optional - Used for spinners/loaders
  xhr.onprogress = function(){
  //oneprogress have readyState Value:3=> processing request 
    console.log('READYSTATE', xhr.readyState);
  }

  xhr.onload = function(){
  //onload is recommanded to use rather than onreadystatechange
    console.log('READYSTATE', xhr.readyState);
    //onload have readyState value : 4=> request finished and response is ready and wil not test readyState at all because its return 4 always
    if(this.status === 200) {
      // console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  // xhr.onreadystatechange = function() {
  	/* onreadystatechange is like onload but ancien and values of readyState are all 0 after 1,2,3,4
  	and will test readyState if ===4 or not to get data 
  	 */
  //   console.log('READYSTATE', xhr.readyState);
  //   if(this.status === 200 && this.readyState === 4){
  //     console.log(this.responseText);
  //   }
  // }

  xhr.onerror = function() {
  //if we have error 
    console.log('Request error...');
  }


// close obligated to run function correctly 
  xhr.send();


    // readyState Values
    // 0: request not initialized 
    // 1: server connection established
    // 2: request received 
    // 3: processing request 
    // 4: request finished and response is ready


  // HTTP Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"
}
