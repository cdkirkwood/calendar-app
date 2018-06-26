const db = require('./db')
const Event = require('./event')
const User = require('./user')

User.hasMany(Event)
Event.belongsTo(User)

module.exports = {
  db, Event, User
}

