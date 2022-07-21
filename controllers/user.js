const Sequelize = require('sequelize')
const TableHints = Sequelize.TableHints
const Op = Sequelize.Op
const User = require('../models').user
const Profile = require("../models").profile
const Company = require("../models").company
const { ReS, ReE, updateOrCreate } = require('../helpers')

User.belongsTo(Profile, { foreignKey: 'profileId' })
User.belongsTo(Company, { foreignKey: 'companyId' })

const create = async (req, res) => {
  const { name, email, password } = req.body
  const user = await User.findOne({ where: { email } })
  if (user) {
    return ReE(res, { success: false, message: 'Ya existe un usuario con ese email' }, 422)
  }
  if (!email || !name || !password) {
    return ReE(res, { success: false, message: 'Email y Password son campos obligatorios' }, 422)
  }
  await updateOrCreate(User,
    { id: { [Op.eq]: id } },
    req.body)
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

const getAll = (_, res) => {
  const attributes = ['id', 'name']
  return User
    .findAndCountAll({
      tableHint: TableHints.NOLOCK,
      attributes: [
        'id',
        'name',
        'email',
        'statusId',
      ],
      include: [
        { model: Profile, attributes },
        { model: Company, attributes }
      ]
    })
    .then(users => res
      .status(200)
      .json({ success: true, users }))
    .catch(err => ReE(res, err, 422))
}
module.exports.getAll = getAll

const update = async (req, res) => {
  return User
    .findByPk(req.params.id)
    .then(user => {
      user.update({ ...req.body })
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
  if (!email || !password) {
    return ReE(res, 'Email y Password son campos obligatorios', 401)
  }
  return User
    .findOne({ where: { email } })
    .then(user => {
      if (!user) {
        return ReE(res, 'Email o Password incorrectos', 401)
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
