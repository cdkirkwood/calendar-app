const db = require('./db')
const Calendar = require('./calendar')
const Event = require('./event')
const User = require('./user')

Calendar.belongsTo(User)
User.hasOne(Calendar)

Calendar.hasMany(Event)
Event.belongsTo(Calendar)

module.exports = {
  db, Calendar, Event, User
}

