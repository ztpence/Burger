// requrieng modules
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var mysql = require('mysql');
var connection = require('./config/connection.js');

//variable to use for express
var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

// setup handlebars view main folder default
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');

app.use(routes);

app.listen(PORT, function(){
    console.log('Server listening on localhost: ' + PORT);
});


