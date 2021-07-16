/*
	Ajax is Async Json Xml its format of Api 

*/

document.getElementById('button1').addEventListener('click', loadCustomer);

document.getElementById('button2').addEventListener('click', loadCustomers);

// Load Single Customer
function loadCustomer(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function(){
    if(this.status === 200) {
      // console.log(this.responseText);

      const customer = JSON.parse(this.responseText);
       /* parse return string keys to keys because if we not use parse we get error when use keys because they are string  */

      const output = `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
      `;

      document.getElementById('customer').innerHTML = output;
    }
  }
//obligated when use XMLHttpRequest();
  xhr.send();
}


// Load Customers
function loadCustomers(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  xhr.onload = function(){
    if(this.status === 200) {
      // console.log(this.responseText);

      const customers = JSON.parse(this.responseText);

      let output = '';

      customers.forEach(function(customer){
        output += `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
      `;
      });

      document.getElementById('customers').innerHTML = output;
    }
  }
//obligated when use XMLHttpRequest();
  xhr.send();
}
