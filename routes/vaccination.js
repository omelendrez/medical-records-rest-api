const express = require('express')
const router = express.Router()

const Vaccination = require('../controllers/vaccination')

router.get('/', Vaccination.getAll)

module.exports = router
