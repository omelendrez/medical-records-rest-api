const Company = require('../controllers/profile')
module.exports = app => {
  app.post('/profiles/', Company.create)
  app.get('/profiles/', Company.getAll)
}
