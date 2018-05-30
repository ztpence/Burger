// Setting up mysql connection

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'zane123',
    database: 'burgers_db',
    
})

connection.connect(function(err){
    if (err){
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('mysql connected w/ id ' + connection.threadId);
});

module.exports = connection;