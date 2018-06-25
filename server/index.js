const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const { db } = require('./db')

const app = express();
const port = process.env.PORT || 5000;

app.use(morgan('dev'))
app.use(bodyParser.json())

app.use('/api', require('./api'))

// error handling endware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

db.sync()
  .then(() => {
    app.listen(port, () => console.log(`Listening on port ${port}`))
  })
