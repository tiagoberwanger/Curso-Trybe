const { connection } = require('./mysql_connection');


const getAll = async() => {
  const [result] = await connection.execute('SELECT * FROM authors ');
  return result;
};
  
const getById = async(id) => {
  const [result] = await connection 
    .execute('SELECT * FROM authors WHERE id=?', [id])
  return result;
};

const addAuthor = async (first_name, last_name, birthday, nationality) => {
  const [result] = await connection
    .execute(
      `INSERT INTO authors 
      (first_name, last_name, birthday, nationality) 
      VALUES (?, ?, ?, ?)`,
      [first_name, last_name, birthday, nationality]
  );
  const response = {
    id: result.insertId, 
    first_name, 
    last_name, 
    birthday, 
    nationality
  }
  return response;
};

const updateAuthor = async (id, first_name, last_name, birthday, nationality) => {
  const result = await connection
    .execute(
      `UPDATE authors 
      SET first_name=?, last_name=?, birthday=?, nationality=?
      WHERE id= ?`,
    [first_name, last_name, birthday, nationality, id]
  );
  
};

const excludeAuthor = async (id) => {
  await connection.execute(
    `DELETE FROM authors 
    WHERE id=?`,
    [id]
  )
}

module.exports ={
  getAll,
  getById,
  addAuthor,
  updateAuthor,
  excludeAuthor
};
