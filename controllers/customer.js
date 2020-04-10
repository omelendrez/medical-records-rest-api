const Customer = require('../models').customer
const Sequelize = require('sequelize')
const TableHints = Sequelize.TableHints;
const Op = Sequelize.Op
const sequelize = require("sequelize");
const { ReS, ReE, updateOrCreate } = require('../helpers')

const create = async (req, res) => {
  const { id, name, phone } = req.body
  console.log(req.body)

  if (!name || !phone) {
    return ReE(res, { success: false, message: 'Faltan datos. Complete los datos faltantes y vuelva a intentar' }, 422)
  }

  let found

  found = await Customer.findOne({ where: { name } })
  if (found) {
    return ReE(res, { success: false, message: 'Ese nombre de cliente ya existe en la base de datos' }, 422)
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
  const Status = require("../models").status;
  Customer.belongsTo(Status);
  const Pet = require("../models").pet;
  Customer.hasMany(Pet)

  const filter = req.query.filter || ''

  return Customer
    .findAndCountAll({
      tableHint: TableHints.NOLOCK,
      where: {
        name: {
          [Op.like]: `%${filter}%`
        }
      },
      attributes: [
        'id',
        'name',
        'address',
        'phone',
        'email',
        'observations'
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
module.exports.getAll = getAll

const getOne = (req, res) => {
  const Status = require("../models").status;
  Customer.belongsTo(Status);
  const Pet = require("../models").pet;
  Customer.hasMany(Pet)
  return Customer
    .findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'name',
        'address',
        'phone',
        'email',
        'observations'
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
    .then(customer => res
      .status(200)
      .json({ success: true, customer }))
    .catch(err => ReE(res, err, 422))
}
module.exports.getOne = getOne

const deleteRecord = (req, res) => {
  return Customer
    .findOne({
      where: {
        id: req.params.id
      }
    })
    .then(customer =>
      customer.destroy()
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