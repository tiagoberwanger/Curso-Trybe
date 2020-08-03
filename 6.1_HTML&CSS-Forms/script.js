// document.getElementById('button').addEventListener('click', function(event) {
//   event.preventDefault();
// })

function check() {
  document.getElementById('print').appendChild(document.createElement('p')).innerHTML = document.getElementById('name').value;
  document.getElementById('print').appendChild(document.createElement('p')).innerHTML = document.getElementById('email').value;
  document.getElementById('print').appendChild(document.createElement('p')).innerHTML = document.getElementById('cpf').value;
  document.getElementById('print').appendChild(document.createElement('p')).innerHTML = document.getElementById('address').value;
  document.getElementById('print').appendChild(document.createElement('p')).innerHTML = document.getElementById('city').value;
  document.getElementById('print').appendChild(document.createElement('p')).innerHTML = document.getElementById('state').value;
  document.getElementById('print').appendChild(document.createElement('p')).innerHTML = document.getElementById('textArea').value;
  document.getElementById('print').appendChild(document.createElement('p')).innerHTML = document.getElementById('role').value;
  document.getElementById('print').appendChild(document.createElement('p')).innerHTML = document.getElementById('roleDesc').value;
  document.getElementById('print').appendChild(document.createElement('p')).innerHTML = document.getElementById('startDate').value;
}

function clearDiv() {
  document.getElementById('print').remove(document.querySelectorAll('p'));
}


// const formElements = document.getElementById('myform').elements;

// for (let i = 0; i < formElements.length; i++) {

// }
