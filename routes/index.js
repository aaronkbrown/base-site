var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Boilerplate for Node Express website' });
});

router.get('/about', function(req, res) {
  res.render('about', { title: 'About Me' });
});

router.get('/resume', function(req, res) {
  res.render('resume', { title: 'Resume' });
});

module.exports = router;
