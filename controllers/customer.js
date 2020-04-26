const Customer = require('../models').customer
const Sequelize = require('sequelize')
const TableHints = Sequelize.TableHints;
const Op = Sequelize.Op
const sequelize = require("sequelize");
const { ReS, ReE, updateOrCreate } = require('../helpers')

const create = async (req, res) => {
  const { id, name, phone } = req.body

  if (!name || !phone) {
    return ReE(res, { success: false, message: 'Faltan datos. Complete los datos faltantes y vuelva a intentar' }, 422)
  }

  if (!id) {
    const found = await Customer.findOne({ where: { name } })
    if (found) {
      return ReE(res, { success: false, message: 'Ese nombre de cliente ya existe en la base de datos' }, 422)
    }
  }
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
        name: {
          [Op.like]: `%${filter}%`
        },
        statusId: 1
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
      include: [{
        model: Pet,
        where: {
          customerId: sequelize.col('customer.id')
        },
        attributes: [
          'name'
        ],
        required: false
      }]
    })
    .then(customers => res
      .status(200)
      .json({ success: true, customers }))
    .catch(err => ReE(res, err, 422))
}
module.exports.getAll = getAll

const getInactive = (req, res) => {
  const Status = require("../models").status;
  Customer.belongsTo(Status);
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
        name: {
          [Op.like]: `%${filter}%`
        },
        statusId: 2
      },
      distinct: true,
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
      include: [{
        model: Status,
        where: {
          id: sequelize.col('customer.statusId')
        },
        attributes: [
          'id',
          'name'
        ]
      }],
      include: [{
        model: Pet,
        where: {
          customerId: sequelize.col('customer.id')
        },
        attributes: [
          'name'
        ],
        required: false
      }]

    })
    .then(customers => res
      .status(200)
      .json({ success: true, customers }))
    .catch(err => ReE(res, err, 422))
}
module.exports.getInactive = getInactive

const getById = (req, res) => {
  const Pet = require("../models").pet;
  Customer.hasMany(Pet)

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
        'statusId'
      ],
      include: [{
        model: Pet,
        where: {
          customerId: sequelize.col('customer.id')
        },
        attributes: [
          'id', 'name'
        ],
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
      customer.update({ statusId: 2 })
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
      customer.update({ statusId: 1 })
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