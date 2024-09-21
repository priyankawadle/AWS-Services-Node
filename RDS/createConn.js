const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'rdsdb.cfaag2msczyj.eu-north-1.rds.amazonaws.com',
    user: 'admin',
    password: 'Priyankawadle',
    database: 'db1',
    port:3306
});
connection.connect(function(err) {  
    if (err) {  
        console.error('error connecting: ' + err.stack);        
    }else{
        console.log('connected as id ' + connection.threadId);
    }
})