var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');

router.get('/signup', function(req, res){
	res.render('signup/signup');
});

router.get('/afterSignup', function(req, res){

	res.render('signup/afterSignup');
});

router.post('/afterSignup', function(req, res){
	var name = req.body.name;
	var email = req.body.email;
	var password = req.body.password;
	var confirmPassword = req.body.confirmPassword;
	userModel.validateUser(name, email, password, function(status){
		///console.log(status);
		if(status)
		{
			///req.session.username = un;	
			res.render('signup/afterSignup');
		}
		else
		{
			res.render('signup/afterSignup');
		}
	});
	
});

module.exports = router;

