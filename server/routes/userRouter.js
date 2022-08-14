const router = require('express').Router();

router.post('/register', (req, res)=> {
    res.json({msg: "Inside register route"});
});

module.exports = router;