var express = require('express');
var router = express.Router();
var loginModel = require.main.require('./models/admin-model');

router.get('/login', function(req, res){
	res.render('admin/login', {error: ""});
});


router.get('/login', function(req, res){
	req.session.destroy(function(err){
		res.render('admin/admin');
	});
});


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
				res.render('admin/index', {name: req.session.name});
			}
			else
			{
				res.render('admin/login', { error: "Invalid email or password" });				
			}
		});
	//res.render('home/index', {name: req.session.username});
});

module.exports = router;
