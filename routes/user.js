const User = require('../controllers/user')
module.exports = app => {
  app.post('/users/', User.create)
  app.get('/users/', User.getAll)
  app.put('/users/:id', User.update)
  app.post('/users/login', User.login)
}
