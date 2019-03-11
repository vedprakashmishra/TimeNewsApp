var express = require('express');
var timeNewsController = require('../app/controller/timeNewsController');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.route('/getTimeNews').get(timeNewsController.getTimeNews);

module.exports = router;
