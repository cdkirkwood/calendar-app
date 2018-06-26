const Sequelize = require('sequelize')
const db = require('./db')

const Event = db.define('event', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  start: {
    type: Sequelize.DATE,
    allowNull: false
  },
  end: {
    type: Sequelize.DATE,
    allowNull: false
  }
})

module.exports = Event
