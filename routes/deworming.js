const Deworming = require('../controllers/deworming')

module.exports = app => {
  app.get('/dewormings/', Deworming.getAll)
  app.get('/dewormings/inactive', Deworming.getInactive)
  app.get('/dewormings/programmed-visits', Deworming.getnextAppointments)
  app.get('/dewormings/by-pet/:id', Deworming.getByPet)
  app.get('/dewormings/:id', Deworming.getById)
  app.post('/dewormings/', Deworming.create)
  app.delete('/dewormings/:id', Deworming.deleteRecord)
  app.put('/dewormings/:id', Deworming.deactivateRecord)
  app.put('/dewormings/:id/restore', Deworming.restoreRecord)
}
