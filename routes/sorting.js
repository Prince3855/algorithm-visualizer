var express = require('express');
var router = express.Router();

/* GET Bubble Sort */
router.get('/bubble-sort', function (req, res, next) {
    res.render('./sort-now', { title: 'Bubble' });
});

/* GET Selection Sort */
router.get('/selection-sort', function (req, res, next) {
    res.render('./sort-now', { title: 'Selection' });
});

/* GET Insertion Sort */
router.get('/insertion-sort', function (req, res, next) {
    res.render('./sort-now', { title: 'Insertion' });
});

/* GET Merge Sort */
router.get('/merge-sort', function (req, res, next) {
    res.render('./sort-now', { title: 'Merge' });
});

/* GET Heap Sort */
router.get('/heap-sort', function (req, res, next) {
    res.render('./sort-now', { title: 'Heap' });
});

module.exports = router;
