const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const { Book } = require('./models')

// app.get('/books', (_req, res) => {
//   Book.findAll()
//     .then(books => {
//       res.status(200).json(books);
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).send({ message: 'Algo deu errado' });
//   })
// })

// app.get('/book/:id', (req, res) => {
//   const { id } = req.params;
//   Book.findByPk(id)
//     .then((book) => {
//       res.status(200).json(book);
//     })
//     .catch((error) => {
//       console.log(error.message)
//       res.status(500).send({ message: 'Algo deu errado' });
//     })
// })

// app.post('/book', (req, res) => {
//   const { title, author, pageQuantity } = req.body;
//   Book.create({title, author, pageQuantity})
//     .then((book) => {
//       res.status(201).json(book);
//     })
//     .catch((error) => {
//       console.log(error.message)
//       res.status(500).send({ message: 'Algo deu errado' });
//     })
// })

app.put('/book/:id ', async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const { id } = req.params;
  console.log(title, author, pageQuantity, id)
  await Book.update(
    { title, author, pageQuantity },
    {
      where: { id },
    }
  ) .then((book) => {
      res.status(200).json({ message: `${book} atualizado com sucesso!` });
    })
    .catch((error) => {
      console.log(error.message)
      res.status(500).send({ message: 'Algo deu errado' });
    })
})

app.delete('/book/:id ', async (req, res) => {
  try{
    const { id } =req.params;
    await Book.destroy({ where: { id }});
    res.status(200).send({ message: `Livro excluído com sucesso.` });
  } catch(e) {
    console.log(e.message);
    res.status(500).send({ message: 'Algo deu errado' });
  }
});

app.listen(port, () => {
  console.log(`Running at ${port}`)
})