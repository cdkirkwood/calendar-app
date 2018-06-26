const express = require('express')
const router = express.Router()

module.exports = router

router.use('/users', require('./users'))
router.use('/events', require('./events'))
