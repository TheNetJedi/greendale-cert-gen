var express = require('express');
var router = express.Router();

/* GET create certificate form */
router.get('/', function (req, res, next) {
  res.render('create-certificate', { title: 'Greendale Community College - You are already accepted!' });
});

/* GET show certificate page */
router.get('/show-certificate', function (req, res, next) {
  res.render('show-certificate', {
    title: 'Greendale Community College - You are already accepted!',
    studentName: 'Your name here',
    courseName: '[insert course here]',
  });
});

/* POST student name and course name to show certificate page */
router.post('/show-certificate', function (req, res, next) {
  res.render('show-certificate', {
    title: 'Greendale Community College - You are already accepted!',
    studentName: req.body['student-name'],
    courseName: req.body['course-name'],
  });
});

module.exports = router;
