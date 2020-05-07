const Consultation = require('../models').consultation
const Sequelize = require('sequelize')
const TableHints = Sequelize.TableHints;
const Op = Sequelize.Op
const sequelize = require("sequelize");
const { ReS, ReE, updateOrCreate, ACTIVE, INACTIVE } = require('../helpers')

const create = async (req, res) => {
  const { id, date } = req.body

  if (!date) {
    return ReE(res, { success: false, message: 'Faltan datos. Complete los datos faltantes y vuelva a intentar' }, 422)
  }

  if (!req.body.nextConsultation) {
    delete req.body.nextConsultation
  }

  await updateOrCreate(Consultation,
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
  const Pet = require("../models").pet
  Consultation.belongsTo(Pet);

  const Customer = require("../models").customer
  Consultation.belongsTo(Customer)

  const filter = req.query.filter || ''
  const limit = parseInt(req.query.limit || 10)
  const page = parseInt(req.query.page || 1)

  const offset = limit * (page - 1)

  return Consultation
    .findAndCountAll({
      tableHint: TableHints.NOLOCK,
      where: {
        [Op.or]: [
          { diagnosis: { [Op.like]: `%${filter}%` } },
          { treatment: { [Op.like]: `%${filter}%` } }
        ],
        statusId: ACTIVE
      },
      separate: true,
      distinct: true,
      offset,
      limit,
      attributes: [
        'id',
        'customerId',
        'petId',
        [sequelize.fn('date_format', sequelize.col('date'), '%d-%b-%y'), 'date'],
        'diagnosis',
        'treatment',
        [sequelize.fn('date_format', sequelize.col('nextConsultation'), '%d-%b-%y'), 'nextConsultation'],
        'observations',
        'amount',
        'paymentMethod',
        'paid'
      ],
      order: [
        ['date', 'DESC']
      ],
      include: [{
        model: Pet,
        where: {
          id: sequelize.col('consultation.petID'),
        },
        attributes: ['name'],
      }, {
        model: Customer,
        where: {
          id: sequelize.col('consultation.customerID')
        },
        attributes: ['name'],
      }]

    })
    .then(consultations => res
      .status(200)
      .json({ success: true, consultations }))
    .catch(err => ReE(res, err, 422))
}
module.exports.getAll = getAll

const getInactive = (req, res) => {
  const Pet = require("../models").pet;
  Consultation.belongsTo(Pet);

  const filter = req.query.filter || ''
  const limit = parseInt(req.query.limit || 10)
  const page = parseInt(req.query.page || 1)

  const offset = limit * (page - 1)

  return Consultation
    .findAndCountAll({
      tableHint: TableHints.NOLOCK,
      where: {
        [Op.or]: [
          { diagnosis: { [Op.like]: `%${filter}%` } },
          { treatment: { [Op.like]: `%${filter}%` } }
        ],
        statusId: INACTIVE
      },
      distinct: true,
      offset,
      limit,
      order: [['updatedAt', 'DESC']],
      attributes: [
        'id',
        'petId',
        [sequelize.fn('date_format', sequelize.col('date'), '%d-%b-%y'), 'date'],
        'diagnosis',
        'treatment',
        [sequelize.fn('date_format', sequelize.col('nextConsultation'), '%d-%b-%y'), 'nextConsultation'],
        'observations',
        'amount',
        'paymentMethod',
        'paid'
      ],
      order: [
        ['date', 'DESC']
      ],
      include: [{
        model: Pet,
        where: {
          id: sequelize.col('consultation.petID'),
        },
        attributes: ['name']
      }]
    })
    .then(consultations => res
      .status(200)
      .json({ success: true, consultations }))
    .catch(err => ReE(res, err, 422))
}
module.exports.getInactive = getInactive

const getById = (req, res) => {
  const Pet = require('../models').pet
  Consultation.belongsTo(Pet)

  return Consultation
    .findOne({
      tableHint: TableHints.NOLOCK,
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'petId',
        [sequelize.fn('date_format', sequelize.col('date'), '%Y-%m-%d'), 'date'],
        'diagnosis',
        'treatment',
        [sequelize.fn('date_format', sequelize.col('nextConsultation'), '%Y-%m-%d'), 'nextConsultation'],
        'observations',
        'amount',
        'paymentMethod',
        'paid'
      ],
      include: [{
        model: Pet,
        where: {
          id: sequelize.col('consultation.petID')
        },
        attributes: ['customerId']
      }]
    })
    .then(consultation => res
      .status(200)
      .json({ success: true, consultation }))
    .catch(err => ReE(res, err, 422))
}
module.exports.getById = getById

const deleteRecord = (req, res) => {
  return Consultation
    .findOne({
      where: {
        id: req.params.id
      }
    })
    .then(consultation =>
      consultation.update({ statusId: INACTIVE })
        .then(consultation => {
          const resp = {
            message: `Consulta eliminada`,
            consultation
          }
          return ReS(res, resp, 200)
        })
        .catch(() => ReE(res, 'Error ocurrido intentando eliminar la consulta'))
    )
    .catch(() => ReE(res, 'Error ocurrido intentando eliminar la consulta'))
}
module.exports.deleteRecord = deleteRecord

const restoreRecord = (req, res) => {
  return Consultation
    .findOne({
      where: {
        id: req.params.id
      }
    })
    .then(consultation =>
      consultation.update({ statusId: ACTIVE })
        .then(consultation => {
          const resp = {
            message: `Consulta restaurada`,
            consultation
          }
          return ReS(res, resp, 200)
        })
        .catch(() => ReE(res, 'Error ocurrido intentando restaurar la consulta'))
    )
    .catch(() => ReE(res, 'Error ocurrido intentando restaurar la consulta'))
}
module.exports.restoreRecord = restoreRecord