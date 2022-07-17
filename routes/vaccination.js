const Vaccination = require('../controllers/vaccination')
module.exports = app => {
  app.get('/vaccinations/', Vaccination.getAll)
  app.get('/vaccinations/inactive', Vaccination.getInactive)
  app.get('/vaccinations/programmed-visits', Vaccination.getnextAppointments)
  app.get('/vaccinations/by-pet/:id', Vaccination.getByPet)
  app.get('/vaccinations/:id', Vaccination.getById)
  app.post('/vaccinations/', Vaccination.create)
  app.delete('/vaccinations/:id', Vaccination.deleteRecord)
  app.put('/vaccinations/:id', Vaccination.deactivateRecord)
  app.put('/vaccinations/:id/restore', Vaccination.restoreRecord)
}
