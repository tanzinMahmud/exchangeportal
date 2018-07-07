var express = require('express');
var router = express.Router();
var loginModel = require.main.require('./models/login-model');

router.post('/index', function(req, res){
	/*if(!req.session.username)
	{
		res.send('Unauthorized login');
		return;
	}
	else
	{*/
		var email = req.body.email;
		var password = req.body.password;
		loginModel.validateUser(email, password, function(status){
			console.log(status);
			if(status)
			{
				req.session.name = req.body.email;
				res.render('home/index', {name: req.session.name});
			}
			else
			{
				res.render('login/index', { error: "Invalid email or password" });				
			}
		});
	//res.render('home/index', {name: req.session.username});
});

module.exports = router;

