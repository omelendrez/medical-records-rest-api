module.exports = (app) => {
  require('./account')(app)
  require('./company')(app)
  require('./consultation')(app)
  require('./customer')(app)
  require('./deworming')(app)
  require('./pet')(app)
  require('./profile')(app)
  require('./status')(app)
  require('./user')(app)
  require('./vaccination')(app)
  require('./database')(app)
  app.get('/wake-up', (_, res) => res.status(200).send({
    success: true,
    message: 'Vet Medical Records API',
    data: { version_number: 'v1.0.0' }
  }))
  app.use('/', function (req, res) {
    res.status(422).json({
      success: false,
      message: 'Endpoint not found'
    })
  })
}

