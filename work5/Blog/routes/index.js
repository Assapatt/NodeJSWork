var express = require('express');
var router = express.Router();
var data = require('../data.json');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('login', {
    title: 'Express'
  });
});

router.post('/login', function (req, res, next) {
  var i = 0;
  while(i < data.users.length) {
    if(data.users[i].username === req.body.username && data.users[i].password === req.body.pwd) {
      console.log("success");
      res.render('list', {
        title: 'Express'
      });
      res.render('list',{chapterList: data.chapterList});
      break;
    }
    i++;
  }
  if(i==data.users.length){
    res.end("login error");
  }
})

module.exports = router;