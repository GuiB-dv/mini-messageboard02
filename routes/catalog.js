var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('catalog', {title: 'catalog'});
});

module.exports = router;