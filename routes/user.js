const express = require('express')
const router = express.Router()

const User = require('../controllers/user')

router.post('/', User.create)
router.get('/', User.getAll)
router.post('/login', User.login)

module.exports = router
