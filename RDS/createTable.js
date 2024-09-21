const mysql = require('mysql');

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port:process.env.PORT
});

con.connect(function(err) {
    if(err) throw err;
    console.log('Connected');

    const sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255))";
    con.query(sql, function(err, result) {
        if(err) throw err;
        console.log('Table is created');
        
    })
    
})