var express = require('express');
var router = express.Router();

/*GET USERS LISTING*/
router.get('/', function(req, res, next){
    res.render('form', {title: 'New post'});
});

module.exports = router;