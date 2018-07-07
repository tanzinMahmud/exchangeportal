var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');
var validationRules = require.main.require('./validation-rules/rules');
var asyncValidator = require('async-validator');

router.get('/signup', function(req, res){
	res.render('signup/signup', {errs: ''});
});

router.post('/afterSignup', function(req, res){

	var rules = validationRules.customer.create;

	var data = {
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
		confirmPassword: req.body.confirmPassword
	};

	var validator = new asyncValidator(rules);
	validator.validate(data, function(errors, fields){
		if(!errors)
		{			
			userModel.insert(data, function(obj){
			res.render('signup/afterSignup');
			});			
		}
		else
		{			
			res.render('signup/signup', {errs: errors});
		}
	});
});

module.exports = router;