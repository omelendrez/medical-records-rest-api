const Customer = require('../models').customer
const Sequelize = require('sequelize')
const TableHints = Sequelize.TableHints;
const Op = Sequelize.Op
const sequelize = require("sequelize");
const { ReS, ReE, updateOrCreate, ACTIVE, INACTIVE } = require('../helpers')

const create = async (req, res) => {
  const { id, name, phone } = req.body

  if (!name || !phone) {
    return ReE(res, { success: false, message: 'Faltan datos. Complete los datos faltantes y vuelva a intentar' }, 422)
  }
  /*
  if (!id) {
    const found = await Customer.findOne({ where: { name } })
    if (found) {
      return ReE(res, { success: false, message: 'Ese nombre de cliente ya existe en la base de datos' }, 422)
    }
  }
  */
  await updateOrCreate(Customer,
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
      return ReS(res, resp, 201)
    })
    .catch(err => ReE(res, err, 422))
}
module.exports.create = create

const getAll = (req, res) => {
  const Pet = require("../models").pet;
  Customer.hasMany(Pet)

  const filter = req.query.filter || ''
  const limit = parseInt(req.query.limit || 10)
  const page = parseInt(req.query.page || 1)

  const offset = limit * (page - 1)

  return Customer
    .findAndCountAll({
      tableHint: TableHints.NOLOCK,
      where: {
        [Op.or]: [
          sequelize.where(sequelize.literal('customer.name'), 'like', `%${filter}%`),
          sequelize.where(sequelize.literal('customer.address'), 'like', `%${filter}%`),
          sequelize.where(sequelize.literal('customer.phone'), 'like', `%${filter}%`)
        ],
        statusId: ACTIVE
      },
      distinct: true,
      offset,
      limit,
      attributes: [
        'id',
        'name',
        'address',
        'phone',
        'email',
        'observations'
      ],
      include: {
        model: Pet,
        where: {
          customerId: sequelize.col('customer.id')
        },
        attributes: [
          'id', 'name', 'statusId'
        ],
        required: false
      }
    })
    .then(customers => res
      .status(200)
      .json({ success: true, customers }))
    .catch(err => ReE(res, err, 422))
}
module.exports.getAll = getAll

const getInactive = (req, res) => {
  const filter = req.query.filter || ''
  const limit = parseInt(req.query.limit || 10)
  const page = parseInt(req.query.page || 1)

  const offset = limit * (page - 1)

  return Customer
    .findAndCountAll({
      tableHint: TableHints.NOLOCK,
      where: {
        name: {
          [Op.like]: `%${filter}%`
        },
        statusId: INACTIVE
      },
      offset,
      limit,
      order: [['updatedAt', 'DESC']],
      attributes: [
        'id',
        'name',
        'address',
        'phone',
        'email',
        'observations',
        'updatedAt'
      ],
    })
    .then(customers => res
      .status(200)
      .json({ success: true, customers }))
    .catch(err => ReE(res, err, 422))
}
module.exports.getInactive = getInactive

const getDebtors = (req, res) => {
  const Consultation = require('../models').consultation
  const Status = require('../models').status

  Customer.hasMany(Consultation)
  Customer.belongsTo(Status)
  Consultation.belongsTo(Customer)
  Status.hasMany(Customer)

  const filter = req.query.filter || ''
  const limit = parseInt(req.query.limit || 10)
  const page = parseInt(req.query.page || 1)

  const offset = limit * (page - 1)

  const difference = sequelize.literal('amount-paid');

  return Customer
    .findAndCountAll({
      tableHint: TableHints.NOLOCK,
      where: [
        sequelize.where(difference, '<>', 0),
        {
          name: {
            [Op.like]: `%${filter}%`
          }
        }
      ],
      attributes: [
        'id',
        'name',
        'address',
        'phone',
        'email',
        'observations',
        [sequelize.col('status.name'), 'customerStatus'],
        [sequelize.fn('count', sequelize.col('consultations.id')), 'visits'],
        [difference, 'debt']

      ],
      group: sequelize.col('customer.name'),
      order: [['name', 'ASC']],
      distinct: true,
      offset,
      limit,
      include: [{
        model: Consultation,
        duplicating: false,
        where: {
          customerId: sequelize.col('customer.id')
        },
        attributes: [],
        required: true
      },
      {
        model: Status,
        where: {
          id: sequelize.col('customer.statusId')
        },
        attributes: [],
        required: true
      }]
    })
    .then(debtors => res
      .status(200)
      .json({ success: true, debtors }))
    .catch(err => ReE(res, err, 422))
}
module.exports.getDebtors = getDebtors

const getById = (req, res) => {
  const Pet = require("../models").pet;
  Customer.hasMany(Pet)
  const Consultation = require('../models').consultation
  Customer.hasMany(Consultation)

  const difference = sequelize.literal('amount-paid');

  return Customer
    .findOne({
      tableHint: TableHints.NOLOCK,
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'name',
        'address',
        'phone',
        'email',
        'observations',
        'statusId',
        [difference, 'debt']
      ],
      include: [{
        model: Pet,
        where: {
          customerId: sequelize.col('customer.id')
        },
        attributes: [
          'id', 'name', 'statusId'
        ],
        required: false
      },
      {
        model: Consultation,
        where: {
          customerId: sequelize.col('customer.id')
        },
        attributes: [],
        required: false
      }]
    })
    .then(customer => res
      .status(200)
      .json({ success: true, customer }))
    .catch(err => ReE(res, err, 422))
}
module.exports.getById = getById

const deleteRecord = (req, res) => {
  return Customer
    .findOne({
      where: {
        id: req.params.id
      }
    })
    .then(customer =>
      //      customer.destroy()
      customer.update({ statusId: INACTIVE })
        .then(customer => {
          const resp = {
            message: `Cliente "${customer.name}" eliminado`,
            customer
          }
          return ReS(res, resp, 200)
        })
        .catch(() => ReE(res, 'Error ocurrido intentando eliminar el cliente'))
    )
    .catch(() => ReE(res, 'Error ocurrido intentando eliminar el cliente'))
}
module.exports.deleteRecord = deleteRecord

const restoreRecord = (req, res) => {
  return Customer
    .findOne({
      where: {
        id: req.params.id
      }
    })
    .then(customer =>
      //      customer.destroy()
      customer.update({ statusId: ACTIVE })
        .then(customer => {
          const resp = {
            message: `Cliente "${customer.name}" restaurado`,
            customer
          }
          return ReS(res, resp, 200)
        })
        .catch(() => ReE(res, 'Error ocurrido intentando restaurar el cliente'))
    )
    .catch(() => ReE(res, 'Error ocurrido intentando restaurar el cliente'))
}
module.exports.restoreRecord = restoreRecord