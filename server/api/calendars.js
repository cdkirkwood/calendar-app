const express = require('express')
const router = express.Router()
const { Calendar } = require('../db')
const asyncHandler = require('express-async-handler')

module.exports = router

router.get('/', asyncHandler(async(req, res) => {
  const calendars = await Calendar.scope('events').findAll()
  res.send(calendars)
}))
