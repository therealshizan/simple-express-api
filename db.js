const { Pool } = require('pg');

const pool = new Pool({
  user: 'admin',
  host: 'dpg-cjjql9fjbvhs73bjffv0-a',
  database: 'demodb_yhme',
  password: 'nUoX3AVI6zjfD3WOKWZd8eRzHTxtzRXq',
  port: 5432,
});

module.exports = pool;
