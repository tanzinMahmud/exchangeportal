var express = require('express');
var router = express.Router();
router.get('/', function(req, res){
	res.render('signup/signup');
});

router.get('/afterSignup', function(req, res){
	res.render('signup/afterSi');
});

module.exports = router;

