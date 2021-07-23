var express = require('express');
var router = express.Router();

/* GET Create Maze - DFS */
router.get('/dfs', function (req, res, next) {
    res.render('./maze-generation', { title: 'Create Maze - DFS' });
});



module.exports = router;
