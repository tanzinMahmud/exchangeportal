var express = require('express');
var router = express.Router();

router.get('/index', function(req, res){
	res.render('login/index', {error: ""});
});

router.get('/loginFirst', function(req, res){
	res.render('login/loginFirst', {error: ""});

});

module.exports = router;