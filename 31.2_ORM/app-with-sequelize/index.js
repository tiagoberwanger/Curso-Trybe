const express = require('express');
const { User } = require('./models')

const app = express();

app.use(express.json());

//endpoint de leitura de todox os dados de usuários
app.get('/', (req, res, next) => {
  User.findAll()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    });
});

// Este endpoint usa o método findByPk do Sequelize para buscar um usuário pelo id.
app.get('/:id', (req, res, next) => {
  User.findByPk(req.params.id)
    .then((user) => {
      if (user === null) {
        return res.status(404).send({ message: 'Usuário não encontrado' });
      }
      return res.status(200).json(user);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    });

});

// Este endpoint usa o método create do Sequelize para salvar um usuário no banco.
app.post('/', (req, res) => {
  const { fullname, email } = req.body;

  User.create({ fullname, email }).then((user) => res.status(200).json(user))
    .catch((e) => {
      console.log(e.message);
      res.status(500).send({ message: 'Algo deu errado' });
    });
});

// Este endpoint usa o método update do Sequelize para alterar um usuário no banco.
app.put('/:id', (req, res) => {
  const { fullname, email } = req.body;

  User.update(
    { fullname, email },
    {
      where: { id: req.params.id },
    }
  ).then((result) => {
    res.status(200).send({ message: 'Usuário atualizado com sucesso!' });
  })
    .catch((e) => {
      console.log(e.message);
      res.status(500).send({ message: 'Algo deu errado' });
    });
});

// Este endpoint usa o método destroy do Sequelize para remover um usuário no banco.
app.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((user) => {
      res.status(200).send({ message: `Usuário excluído com sucesso.` });
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).send({ message: 'Algo deu errado' });
    });
});

const PORT = 3000;

app.listen(PORT, () => console.log('Server is running!'));
