const express = require('express')
const router = express.Router()

const Customer = require('../controllers/customer')

router.get('/', Customer.getAll)
router.get('/inactive', Customer.getInactive)
router.get('/debtors', Customer.getDebtors)
router.get('/:id', Customer.getById)
router.post('/', Customer.create)
router.delete('/:id', Customer.deleteRecord)
router.put('/:id', Customer.restoreRecord)

module.exports = router
