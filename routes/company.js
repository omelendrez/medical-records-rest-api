const Company = require('../controllers/company')
module.exports = app => {
  app.post('/companies/', Company.create)
  app.get('/companies/', Company.getAll)
  app.get('/companies/:id', Company.getById)
  app.put('/companies/:id', Company.create)
}
