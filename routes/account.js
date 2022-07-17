const Account = require('../controllers/account')
module.exports = app => {
  app.post('/accounts/', Account.create)
  app.get('/accounts/:id', Account.getAll)
}

