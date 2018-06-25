const express = require('express')
const router = express.Router()
const { User } = require('../db')
const asyncHandler = require('express-async-handler')

module.exports = router

router.get('/:id', asyncHandler(async(req, res) => {
  console.log('got here')
  const user = await User.scope('calendar').findById(req.params.id)
  res.send(user)
}))
