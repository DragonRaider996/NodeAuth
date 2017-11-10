var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.json({
        message:"You can see the data!!",
        decoded:req.body.decoded
    });
});

module.exports = router;