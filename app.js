// DECLARATION
var express = require('express');
var app = express();
var port = 1337;
var bodyParser = require('body-parser');
var mysql = require('mysql');
var expressSession = require('express-session');

var land = require('./controllers/land');
var allExchangeableAds = require('./controllers/allExchangeableAds');
var login = require('./controllers/login');
var signup = require('./controllers/signup');
var home = require('./controllers/home');


// CONFIGURATION
app.set('view engine', 'ejs');


// MIDDLEWARES
app.use(bodyParser.urlencoded({extended:false}));
app.use(expressSession({secret: 'my top secret pass', saveUninitialized: true, resave: false}));

// ROUTES
app.use('/land',land);
app.use('/allExchangeableAds',allExchangeableAds);
app.use('/login',login);
app.use('/signup',signup);
app.use('/home',home);

app.get('/', function(req, res){
	res.redirect('/land')
});


// SERVER START
app.listen(port, function(){
	console.log('Server started successfully...');
});