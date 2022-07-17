const Consultation = require('../controllers/consultation')
module.exports = app => {
  app.get('/consultations/', Consultation.getAll)
  app.get('/consultations/inactive', Consultation.getInactive)
  app.get('/consultations/programmed-visits', Consultation.getnextAppointments)
  app.get('/consultations/by-pet/:id', Consultation.getByPet)
  app.get('/consultations/:id', Consultation.getById)
  app.post('/consultations/', Consultation.create)
  app.delete('/consultations/:id', Consultation.deleteRecord)
  app.put('/consultations/:id', Consultation.deactivateRecord)
  app.put('/consultations/:id/restore', Consultation.restoreRecord)
}
