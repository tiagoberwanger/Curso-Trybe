// index.js
const express = require('express');
const { Addresses, Employees } = require('./models');

const app = express();

app.get('/employees', (_req, res) => Employees
  .findAll({ include: { model: Addresses, as: 'addresses' } })
  .then((answer) => res.status(200).json(answer))
  .catch(() => res.status(500).json({ message: 'Algo deu errado' })));

const PORT = 3000;
app.listen(PORT, () => console.log(`Port: ${PORT}`));