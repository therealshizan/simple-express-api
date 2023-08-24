const createTableQuery = `CREATE TABLE IF NOT EXISTS users ( id serial PRIMARY KEY, username VARCHAR(50) NOT NULL, email VARCHAR(100) NOT NULL);`;

const getUsersQuery = "SELECT * FROM users";

const addUserQuery = `INSERT INTO users (username, email) VALUES ($1, $2) RETURNING *;`;

const getUserQuery = 'SELECT * FROM users WHERE id = $1';

const deleteUserQuery = 'DELETE FROM users WHERE id = $1';

module.exports = {createTableQuery, getUsersQuery, addUserQuery, getUserQuery, deleteUserQuery, deleteUserQuery}