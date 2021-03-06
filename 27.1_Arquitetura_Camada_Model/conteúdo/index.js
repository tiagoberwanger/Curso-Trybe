const express = require('express');
const rescue = require('express-rescue');
const bodyParser = require('body-parser');
const authorsModelsSQL = require('./models/authorsModels_mysql');
const authorsModelsMONGO = require('./models/authorsModels_mongo');

const app = express();

app.use(bodyParser.json());

app.get('/authors', 
  rescue(async(req, res) => {
  const authors = await authorsModelsSQL.getAll();

  res.status(200).json(authors);
}));

app.get('/authors/:id', rescue(async(req, res) => {
  const {id} = req.params;

  const authors = await authorsModelsSQL.getById(id);

  res.status(200).json(authors);
}));

app.post('/authors', rescue(async(req, res) => {
  const {first_name, last_name, birthday, nationality} = req.body;

  const author = await authorsModelsSQL
    .addAuthor(first_name, last_name, birthday, nationality);

  res.status(201).json(author);
}));

app.put('/authors/:id', rescue(async(req, res) => {
  const {first_name, last_name, birthday, nationality} = req.body;
  const {id} = req.params;

  await authorsModelsSQL
    .updateAuthor(id, first_name, last_name, birthday, nationality);

  res.status(204).end();
}))

app.delete('/authors/:id', rescue(async(req, res) => {
  const {id} = req.params;

  await authorsModelsSQL
    .excludeAuthor(id);

  res.status(204).end();
}))

app.listen(3000, ()=> {console.log('running')})