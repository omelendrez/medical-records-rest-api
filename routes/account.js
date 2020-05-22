const express = require('express')
const router = express.Router()

const Account = require('../controllers/account')

router.post('/', Account.create)

module.exports = router
