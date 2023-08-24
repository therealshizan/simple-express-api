const { Pool } = require('pg');

const connectionString = 'postgres://admin:nUoX3AVI6zjfD3WOKWZd8eRzHTxtzRXq@dpg-cjjql9fjbvhs73bjffv0-a.oregon-postgres.render.com/demodb_yhme'

const pool = new Pool({
  // user: 'admin',
  // host: 'dpg-cjjql9fjbvhs73bjffv0-a',
  // database: 'demodb_yhme',
  // password: 'nUoX3AVI6zjfD3WOKWZd8eRzHTxtzRXq',
  // port: 5432,
  connectionString: connectionString,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

module.exports = pool;
