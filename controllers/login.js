var express = require('express');
var router = express.Router();

router.get('/index', function(req, res){
	res.render('login/index', {error: ""});
});

router.get('/loginFirst', function(req, res){
	res.render('login/loginFirst', {error: ""});

});

router.get('/index', function(req, res){
	req.session.destroy(function(err){
		res.render('login/login');
	});
});

module.exports = router;