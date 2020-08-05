// Função de criar e popular a div
function check() {
  for (let index = 0; index < document.getElementsByTagName('input').length -2; index++) {
    let printDiv = document.getElementById('print')
    let newP = document.createElement('p')
    let inputs = document.getElementsByTagName('input')
    printDiv.appendChild(newP).innerHTML += inputs[index].value;
  }
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
