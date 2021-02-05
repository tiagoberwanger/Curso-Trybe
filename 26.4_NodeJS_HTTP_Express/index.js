//EXERCICIO 2
const express = require('express');
const app = express()

app.get('/ping', function (req, res) {
  res.send('Pong!')
})
 
app.listen(3000);

//EXERCICIO 3
const express = require('express');
const app = express();
app.use(express.json());
app.post('/hello', (req, res) => {
  const { name } = req.body;
  // const name = req.body.name;
  res.status(200).json({ "message": `Hello, ${name}!` })
})

app.listen(3000);
