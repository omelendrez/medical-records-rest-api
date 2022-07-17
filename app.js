const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const pe = require('parse-error')
const cors = require('cors')
require('dotenv').config()

const models = require('./models')
const CONFIG = require('./config')

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

const connection = process.env.CLEARDB_DATABASE_URL?.split('/')
const dbName = connection[connection.length - 1]

models.sequelize.authenticate()
  .then(() => {
    console.log('Connected to SQL database:', dbName || CONFIG.db_name)
  })
  .catch(err => console.error('Unable to connect to SQL database:', dbName || CONFIG.db_name, err))

if (CONFIG.app === 'dev') {
  models.sequelize.sync({ force: false }) //creates table if they do not already exist
  // models.sequelize.sync({ force: true })//deletes all tables then recreates them useful for testing and development purposes
}

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE"
  )
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  )
  res.setHeader("Access-Control-Allow-Credentials", true)
  next()
})

require("./routes")(app)

app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use(function (err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: err
  })
})

module.exports = app

//This is here to handle all the uncaught promise rejections
process.on('unhandledRejection', error => {
  console.error('Uncaught Error', pe(error))
})
