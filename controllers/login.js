var express = require('express');
var router = express.Router();
router.get('/login', function(req, res){
	res.render('login/login');
});

router.get('/loginFirst', function(req, res){
	res.render('login/loginFirst');
});

module.exports = router;