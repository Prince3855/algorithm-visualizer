var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/bubble-sort', function(req, res, next) {
  res.render('./sorting/bubble-sort', { title: 'Express' });
});

module.exports = router;
