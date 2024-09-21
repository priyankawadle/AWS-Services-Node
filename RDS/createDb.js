const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'rdsdb.cfaag2msczyj.eu-north-1.rds.amazonaws.com',
    user: 'admin',
    password: 'Priyankawadle',
    port:3306
});

con.connect(function(err) {
    if(err) throw err
    console.log('Connected');

    con.query("CREATE DATABASE testdb", function(err, result) {
        if(err) throw err
        console.log('Database is created');
        
    });
    
});