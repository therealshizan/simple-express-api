const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'demodb',
  password: 'abcd',
  port: 5432,
});

module.exports = pool;