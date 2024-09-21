const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'rdsdb.cfaag2msczyj.eu-north-1.rds.amazonaws.com',
    user: 'admin',
    password: 'Priyankawadle',
    database:'testdb',
    port:3306
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