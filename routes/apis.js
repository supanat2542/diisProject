var express = require('express');
var router = express.Router();
const db = require('./queries');

router.get('/visitor',db.getVisitor);

router.get('/tags', db.getTag);

module.exports = router;