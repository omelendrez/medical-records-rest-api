const Customer = require('../controllers/customer')
module.exports = app => {
  app.get('/customers/', Customer.getAll)
  app.get('/customers/inactive', Customer.getInactive)
  app.get('/customers/debtors', Customer.getDebtors)
  app.get('/customers/debtors/:id', Customer.getBalanceById)
  app.get('/customers/:id', Customer.getById)
  app.post('/customers/', Customer.create)
  app.delete('/customers/:id', Customer.deleteRecord)
  app.put('/customers/:id', Customer.deactivateRecord)
  app.put('/customers/:id/restore', Customer.restoreRecord)
}
