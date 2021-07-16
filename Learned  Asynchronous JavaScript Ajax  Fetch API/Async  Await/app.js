// like dart 
async function myFunc() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello'), 1000);
  });

  const error = false;

  if(!error){
    const res = await promise; // Wait until promise is resolved
    return res;
  } else {
    await Promise.reject(new Error('Something went wrong'));
  }
}

myFunc()
  .then(res => console.log(res))
  .catch(err => console.log(err));


  /* this is better use async await more than (rather than ) use promise  */
async function getUsers() {
  // await response of the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // Only proceed once its resolved
  const data = await response.json();

  // only proceed once second promise is resolved
  return data;
}

getUsers().then(users => console.log(users)); //async return promise so we define then and catch like dart