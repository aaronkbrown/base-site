var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Aaron Brown, front end web developer' });
});

router.get('/about', function(req, res) {
  res.render('about', { title: 'About Me' });
});

router.get('/portfolio', function(req, res){
  res.render('portfolio', { title: 'Portfolio' });
});

router.get('/resume', function(req, res) {
  res.render('resume', { title: 'Resume' });
});

router.get('/connect', function(req, res) {
  res.render('connect', { title: 'Connect' });
});

//router.get('/links', function(req, res) {
//  res.render('links', { title: 'Links' });
//});

module.exports = router;
