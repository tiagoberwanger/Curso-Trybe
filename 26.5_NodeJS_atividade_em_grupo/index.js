const users = require('./dados')
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

//Utilizamos o método GET pois queremos resgatar dados do array users. 
app.get('/user/:name', (req, res) => {
  const { name } = req.params;
  //Fazer a filtragem para verificar a existência do usuário na base users.
  const { comments } = users.filter((user) => user.user === name)[0] || [];
  //Caso o usuário não for encontrado, retormos uma mensagem de erro.
  if (!comments) return res.status(404).send({"error": "user not found"})
  //Se encontrado, retornamos os comentários desse usuário.
  res.json({comments, user: name})
});
  
app.listen(3000);
