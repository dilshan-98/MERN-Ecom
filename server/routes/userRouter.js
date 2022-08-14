const router = require('express').Router();

const user = require('../controllers/userController');

router.post('/register', user.register);

module.exports = router;