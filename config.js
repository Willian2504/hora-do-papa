const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'will',
    password: 'melancia302516',
    database: 'primeiro.projeto'
});

module.exports = pool;  