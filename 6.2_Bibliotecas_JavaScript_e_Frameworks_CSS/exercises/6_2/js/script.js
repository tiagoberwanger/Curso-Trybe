
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
clearDiv() {
  document.getElementById('print').remove(appendChild(document.querySelectorAll('p')))
}


//Bibliotecas externas
//DatePickerX
document.getElementById('startDate').DatePickerX.init();

//JustValidate
new window.JustValidate('.js-form');

new JustValidate('.js-form', {
  rules: {
    email: {
      required: true,
      email: true
    },
  messages: {
    email: {
      required: 'O campo e-mail é obrigatório'
      email: 'O email digitado não é válido'
    }
  }
  } 
})

new window.JustValidate('.js-form', {
  rules: {
    email: {
      required: true,
      email: true
    },
  },
  messages: {
    email: {
      required: 'O campo e-mail é obrigatório'
      email: 'O email digitado não é válido'
    },
  }
  submitHandler: function (form, values) {
  },
});