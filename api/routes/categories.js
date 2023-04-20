var express = require('express');
var router = express.Router();
const isAuthhenticated = true;
router.all("*", (req, res, next) => {
    if (isAuthhenticated) {
        next();
    } else {
        res.json({success: false, error: "Not authenticated"});
    }
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({success: true});
});

module.exports = router;
