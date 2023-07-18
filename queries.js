const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ACDC',
  password: 'PRAJAWAL',
  port: 5432,
})

module.exports=pool;