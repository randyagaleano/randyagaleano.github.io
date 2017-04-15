var express = require('express');
var router = express.Router();

// get portfolio
router.get('/', function(req, res, next) {
	res.render('portfolio', { title: 'Express'} );
});

module.exports = router;