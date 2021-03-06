const connection = require('./mongo_connection');

// Busca todos os autores do banco.
const getAll = async () => {
  return connection()
    .then((db) => db.collection('authors').find().toArray())
}

module.exports = {
  getAll,
}