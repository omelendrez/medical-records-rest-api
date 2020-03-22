const express = require('express')
const router = express.Router()

const Customer = require('../controllers/customer')
const Product = require('../controllers/product')
const Status = require('../controllers/status')
const Supplier = require('../controllers/supplier')

router.get('/api/customers', Customer.getAll)
router.post('/api/customers', Customer.create)
router.delete('/api/customers/:id', Customer.deleteRecord)

router.get('/api/products', Product.getAll)
router.post('/api/products', Product.create)
router.delete('/api/products/:id', Product.deleteRecord)

router.get('/api/statuses', Status.getAll)
router.post('/api/statuses', Status.create)
router.delete('/api/statuses/:id', Status.deleteRecord)

router.get('/api/suppliers', Supplier.getAll)
router.post('/api/suppliers', Supplier.create)
router.delete('/api/suppliers/:id', Supplier.deleteRecord)

module.exports = router
