const Pet = require('../controllers/pet')
module.exports = app => {
  app.get('/pets/', Pet.getAll)
  app.get('/pets/inactive', Pet.getInactive)
  app.get('/pets/:id', Pet.getById)
  app.post('/pets/', Pet.create)
  app.delete('/pets/:id', Pet.deleteRecord)
  app.put('/pets/:id', Pet.deactivateRecord)
  app.put('/pets/:id/restore', Pet.restoreRecord)
}
