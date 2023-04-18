const router = require('express').Router();
const { auth } = require('../controllers/auth.controller');

router.get('/', auth);

module.exports = router;