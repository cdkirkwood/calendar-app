const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/spotify-calendar', {logging: false})

module.exports = db
