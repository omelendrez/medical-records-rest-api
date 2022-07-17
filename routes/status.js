const Status = require('../controllers/status')
module.exports = app => {
  app.get('/status/', Status.getAll)
  app.post('/status/', Status.create)
}
