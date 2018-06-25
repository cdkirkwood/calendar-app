const Sequelize = require('sequelize')
const db = require('./db')
const Event = require('./event')

const Calendar = db.define('calendar', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  scopes: {
    events: {
      include: Event
    }
  }
})

module.exports = Calendar
