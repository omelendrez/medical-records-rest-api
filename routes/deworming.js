const express = require('express')
const router = express.Router()

const Deworming = require('../controllers/deworming')

router.get('/', Deworming.getAll)

module.exports = router
