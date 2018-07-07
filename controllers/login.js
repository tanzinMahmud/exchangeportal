var express = require('express');
var router = express.Router();
var loginModel = require.main.require('./models/login-model');

router.get('/', function(req, res){
	res.render('/login/index', {error: ""});
	//req.session.loginError = '';
});

router.get('/loginFirst', function(req, res){
	res.render('login/loginFirst', {error: ""});

});

router.post('/', function(req, res){
	var email = req.body.email;
	var password = req.body.password;
	loginModel.validateUser(email, password, function(status){
		console.log(status);
		if(status)
		{
			req.session.name = req.body.name;
			res.redirect('/home');
		}
		else
		{
			res.render('login/login', { error: "Invalid email or password" });
			
		}
	});
	
});

module.exports = router;