const express = require('express')
const router = express.Router()

const Consultation = require('../controllers/consultation')

router.get('/', Consultation.getAll)
router.get('/inactive', Consultation.getInactive)
router.get('/programmed-visits', Consultation.getNextConsultations)
router.get('/:id', Consultation.getById)
router.post('/', Consultation.create)
router.delete('/:id', Consultation.deleteRecord)
router.put('/:id', Consultation.restoreRecord)

module.exports = router
