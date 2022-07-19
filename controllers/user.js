const User = require('../models').user
const Sequelize = require('sequelize')
const TableHints = Sequelize.TableHints
const Op = Sequelize.Op
const sequelize = require("sequelize")
const { ReS, ReE, updateOrCreate, isValidEmail } = require('../helpers')

const create = async (req, res) => {
  const { id } = req.params
  const { name, email, password } = req.body

  const user = await User.findOne({ where: { email } })

  if (user) {
    return ReE(res, { success: false, message: 'Ya existe un usuario con ese email' }, 422)
  }

  if (!name || !email || !password) {
    return ReE(res, { success: false, message: 'Todos los campos son obligatorios' }, 422)
  }

  if (!isValidEmail(email)) {
    return ReE(res, { success: false, message: 'No es un email válido' }, 422)
  }

  await updateOrCreate(User,
    {
      id: {
        [Op.eq]: id
      }
    },
    req.body
  )
    .then(record => {

      const resp = {
        message: 'Datos guardados satisfactoriamente',
        record
      }
      ReS(res, resp, 201)
    })
    .catch(err => ReE(res, err, 422))
}
module.exports.create = create

const getAll = (req, res) => {

  return User
    .findAndCountAll({
      tableHint: TableHints.NOLOCK,
      attributes: [
        'id',
        'email',
        'name',
        'companyId',
        'profileId'
      ]
    })
    .then(users => res
      .status(200)
      .json({ success: true, users }))
    .catch(err => ReE(res, err, 422))
}
module.exports.getAll = getAll

const update = async (req, res) => {
  const { id } = res.params
  const { name, password } = req.body
  return User
    .findOne({ where: { id } })
    .then(user => {
      user.update({
        name, password
      })
        .then(user => {
          res
            .status(200)
            .json(user.data())
        })
        .catch(err => ReE(res, err, 401))
    })
}

module.exports.update = update

const login = async (req, res) => {
  const { email, password } = req.body

  if (!email) {
    return ReE(res, 'El email es obligatorio', 400)
  }

  if (!password) {
    return ReE(res, 'La password es obligatoria', 400)
  }

  if (!isValidEmail(email)) {
    return ReE(res, { success: false, message: 'El email no es válido' }, 400)
  }

  return User
    .findOne({ where: { email } })
    .then(user => {
      if (!user) {
        return ReE(res, 'Credenciales  incorrectas', 401)
      }
      user.comparePassword(password)
        .then(user => {
          res
            .status(200)
            .json(user.data())
        })
        .catch(err => ReE(res, err, 401))
    })
}

module.exports.login = login
