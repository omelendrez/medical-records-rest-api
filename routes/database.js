const Database = require('../controllers/database')
module.exports = app => {
  app.get('/database/seed/', Database.seed)
}
