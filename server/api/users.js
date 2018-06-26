const express = require('express')
const router = express.Router()
const { User } = require('../db')
const asyncHandler = require('express-async-handler')

module.exports = router

router.get('/:id', asyncHandler(async(req, res) => {
  const user = await User.findById(req.params.id)
  res.send(user)
}))
