var express = require('express');
var router = express.Router();
router.get('/', function(req,){
	res.render('land');
});

module.exports = router;

