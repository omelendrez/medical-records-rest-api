const express = require('express')
const router = express.Router()

const Customer = require('../controllers/customer')
const Status = require('../controllers/status')

router.get('/api/customers', Customer.getAll)
router.post('/api/customers', Customer.create)
router.delete('/api/customers/:id', Customer.deleteRecord)

router.get('/api/statuses', Status.getAll)
router.post('/api/statuses', Status.create)
router.delete('/api/statuses/:id', Status.deleteRecord)

module.exports = router
