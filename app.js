// DECLARATION
var express = require('express');
var app = express();
var port = 1337;
var bodyParser = require('body-parser');

var land = require('./controllers/land');
var allExchangeableAds = require('./controllers/allExchangeableAds');
var login = require('./controllers/login');
var signup = require('./controllers/signup');

// CONFIGURATION
app.set('view engine', 'ejs');


// MIDDLEWARES


// r
app.use('/land',land);
app.use('/allExchangeableAds',allExchangeableAds);
app.use('/login',login);
app.use('/signup',signup);

app.get('/', function(req, res){
	res.redirect('/land')
});


// SERVER START
app.listen(port, function(){
	console.log('Server started successfully...');
});