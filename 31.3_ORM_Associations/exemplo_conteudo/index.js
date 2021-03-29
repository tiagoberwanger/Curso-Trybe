// index.js
const express = require('express');
const { Addresses, Employees } = require('./models');
const sequelize = require('sequelize');

const app = express();

app.get('/employees', (_req, res) => Employees
  .findAll({ include: { model: Addresses, as: 'addresses' } })
  .then((answer) => res.status(200).json(answer))
  .catch(() => res.status(500).json({ message: 'Algo deu errado' })));

app.get('/employees/:id', (req, res) => Employees
  .findAll({ where: { employee_id: req.params.id } })
  .then((employee) => {
    if (!employee.length) {
      return res.status(404).send({ message: 'Funcionário não encontrado' });
    }
    if (req.query.includeAddresses === 'true') {
      return Addresses.findAll({ where: { employee_id: req.params.id } })
        .then((address) => res.status(200).json(
          { employee: employee[0], address },
        ));
    }
    return res.status(200).json(employee);
  })
  .catch(() => res.status(500).json({ message: 'Algo deu errado' }))
);

app.post('/employees', async (req, res) => {
  // Primeiro iniciamos a transação
  const t = await sequelize.transaction();

  try {
    const { firstName, lastName, age, city, street, number } = req.body;

    // Depois executamos as operações
    const employee = Employee.create(
      { firstName, lastName, age },
      { transaction: t }
    );

    const address = Address.create(
      { city, street, number, employee_id: employee.id },
      { transaction: t }
    );

    // Se chegou até essa linha, quer dizer que nenhum erro ocorreu.
    // Com isso, podemos finalizar a transação usando a função `commit`.
    await t.commit();

    res.status(200).json({message: 'Cadastrado com sucesso'});
  } catch (_e) {
    // Se entrou nesse bloco é porque alguma operação falhou.
    // Nesse caso, o sequelize irá reverter as operações anteriores com a função rollback, não sendo necessário fazer manualmente
    await t.rollback();
    res.status(500).json({ message: 'Algo deu errado' })
  }  
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Port: ${PORT}`));