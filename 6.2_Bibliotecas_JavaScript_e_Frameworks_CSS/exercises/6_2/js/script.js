
// Função de criar e popular a div
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

// Função de remover a div
function clearDiv() {
  let p = document.querySelectorAll('p');
  for (let i in p){
    p[i].remove();
  }
}

//Bibliotecas externas
//DatePickerX
document.getElementById('startDate').DatePickerX.init();

//JustValidate
new JustValidate('.js-form', {
  rules: {
    name: {
      required: true
    },
    email: {
      required: true,
      email: true
    },
    cpf: {
      required: true
    },
    address: {
      required: true
    },
    city: {
      required: true
    },
  },
  submitHandler: function (form, values, ) {
      check();
  }
})
