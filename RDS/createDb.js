const mysql = require('mysql');

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port:process.env.PORT
});

con.connect(function(err) {
    if(err) throw err
    console.log('Connected');

    con.query("CREATE DATABASE testdb", function(err, result) {
        if(err) throw err
        console.log('Database is created');
        
    });
    
});