var express = require('express');
var router = express.Router();

/* GET Bubble Sort */
router.get('/bubble-sort', function (req, res, next) {
    console.log('yes');
    res.render('./sorting/bubble-sort', { title: 'Bubble Sort' });
});

/* GET Selection Sort */
router.get('/selection-sort', function (req, res, next) {
    res.render('./sorting/selection-sort', { title: 'Selection Sort' });
});

/* GET Insertion Sort */
router.get('/insertion-sort', function (req, res, next) {
    res.render('./sorting/insertion-sort', { title: 'Insertion Sort' });
});

/* GET Merge Sort */
router.get('/merge-sort', function (req, res, next) {
    res.render('./sorting/merge-sort', { title: 'Merge Sort' });
});

module.exports = router;
