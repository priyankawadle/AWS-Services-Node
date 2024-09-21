const mysql = require('mysql');

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port:process.env.PORT
});
connection.connect(function(err) {  
    if (err) {  
        console.error('error connecting: ' + err.stack);        
    }else{
        console.log('connected as id ' + connection.threadId);
    }
})