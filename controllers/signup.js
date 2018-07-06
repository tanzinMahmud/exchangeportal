var express = require('express');
var router = express.Router();
router.get('/signup', function(req, res){
	res.render('signup/signup');
});

router.get('/afterSignup', function(req, res){
	res.render('signup/afterSignup');
});

module.exports = router;

