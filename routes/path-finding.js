var express = require('express');
var router = express.Router();

/* GET DFS */
router.get('/dfs', function (req, res, next) {
    res.render('./path-finding', { title: 'DFS' });
});

/* GET BFS */
router.get('/bfs', function (req, res, next) {
    res.render('./path-finding', { title: 'BFS' });
});


module.exports = router;
