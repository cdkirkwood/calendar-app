const express = require('express')
const router = express.Router()
const { Event } = require('../db')
const asyncHandler = require('express-async-handler')

module.exports = router

router.get('/', asyncHandler(async(req, res) => {
  const events = await Event.findAll()
  res.send(events)
}))

router.post('/', asyncHandler(async(req, res) => {
  const {start,  calendarId, end, title} = req.body
  const convertedStart = new Date(...start)
  const convertedEnd = new Date(...end)
  const newEvent = await Event.create({
    title,
    calendarId,
    start: convertedStart,
    end: convertedEnd,
  })
  res.send(newEvent)
}))

router.put('/:id', asyncHandler(async(req, res) => {
  const event = await Event.findById(req.params.id)
  const newEvent = await event.update(req.body)
  res.send(newEvent)
}))

router.delete('/:id', asyncHandler(async(req, res) => {
  await Event.destroy(req.params.id)
  res.sendStatus(201)
}))
