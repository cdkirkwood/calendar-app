const Sequelize = require('sequelize')
const db = require('./db')
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
      events: {
        include: Event
      }
    }
  })

module.exports = User
