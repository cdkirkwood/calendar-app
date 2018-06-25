const Sequelize = require('sequelize')
const db = require('./db')
const Calendar = require('./calendar')
const Event = require('./event')

const User = db.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
    scopes: {
      calendar: {
        include: [
          {
            model: Calendar, include: [{model: Event}]
          }
        ]
      }
    }
  })

module.exports = User
