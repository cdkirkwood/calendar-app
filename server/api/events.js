const express = require('express')
const router = express.Router()
const { Event } = require('../db')
const asyncHandler = require('express-async-handler')

module.exports = router

router.get('/', asyncHandler(async(req, res) => {
  const userId = req.query.userId
  const events = userId ?
  await Event.findAll({ where: { userId } })
  : await Event.findAll()
  res.send(events)
}))

router.post('/', asyncHandler(async(req, res) => {
  const newEvent = await Event.create(req.body)
  res.send(newEvent)
}))

router.put('/:id', asyncHandler(async(req, res) => {
  const event = await Event.findById(req.params.id)
  const newEvent = await event.update(req.body)
  res.send(newEvent)
}))

router.delete('/:id', asyncHandler(async(req, res) => {
  await Event.destroy({ where: { id: req.params.id } })
  res.sendStatus(201)
}))
