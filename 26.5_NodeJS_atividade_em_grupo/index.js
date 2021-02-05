const users = require('./dados')
const express = require('express');
const app = express();

//Utilizamos o método GET pois queremos resgatar dados do array users. 
app.get('/user/:name', (req, res) => {
  const { name } = req.params;
  //Fazer a filtragem para verificar a existência do usuário na base users.
  const result = users.filter((user) => {
    if (user.user === name) {
      return user
    }
  })
  //Caso o usuário não for encontrado, retormos uma mensagem de erro.
  if (result[0] === undefined) {
  res.status(404).send({"error": "user not found"})
  }
  //Se encontrado, retornamos os comentários desse usuário.
  res.send({comments: result[0].comments})
});
  
app.listen(3000)
