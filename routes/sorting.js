var express = require('express');
var router = express.Router();

/* GET Bubble Sort */
router.get('/bubble-sort', function (req, res, next) {
    res.render('./sorting/sort-now', { title: 'Bubble' });
});

/* GET Selection Sort */
router.get('/selection-sort', function (req, res, next) {
    res.render('./sorting/sort-now', { title: 'Selection' });
});

/* GET Insertion Sort */
router.get('/insertion-sort', function (req, res, next) {
    res.render('./sorting/sort-now', { title: 'Insertion' });
});

/* GET Merge Sort */
router.get('/merge-sort', function (req, res, next) {
    res.render('./sorting/sort-now', { title: 'Merge' });
});

module.exports = router;
