const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost', // Se necessário, substitua pelo seu host, `localhost` é o comum
  user: 'root', // Se necessário, substitua pelo seu usuário para conectar ao banco na sua máquina
  password: 'mualbk', // Se necessário, substitua pela sua senha para conectar ao banco na sua máquina
  database: 'rest_exercicios',
  port: '3306'
});

module.exports = connection;
