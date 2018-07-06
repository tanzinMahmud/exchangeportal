var express = require('express');
var router = express.Router();
router.get('/', function(req, res){
	res.render('allExchangeableAds');
});
router.get('/allExchangeableAds', function(req, res){
	res.render('allExchangeableAds');
});

module.exports = router;

