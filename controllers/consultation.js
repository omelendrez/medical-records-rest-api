const Consultation = require('../models').consultation
const Sequelize = require('sequelize')
const TableHints = Sequelize.TableHints;
const Op = Sequelize.Op
const sequelize = require("sequelize");
const { ReS, ReE, updateOrCreate, ACTIVE, INACTIVE } = require('../helpers')
const Account = require('./account')

const create = async (req, res) => {
  const { id, date, amount, paid, paymentMethod } = req.body

  if (amount.length === 0 || paid.length === 0) return ReE(res, { success: false, message: 'Los importes no pueden quedar vacíos' }, 422)
  if (isNaN(amount) || isNaN(paid)) return ReE(res, { success: false, message: 'Los importes deben contener números' }, 422)
  if (paid > 0 && !paymentMethod) return ReE(res, { success: false, message: 'Debe seleccionar el método de pago' }, 422)
  if (paid === 0) req.body.paymentMethod = ''
  if (!date) return ReE(res, { success: false, message: 'Faltan datos. Complete los datos faltantes y vuelva a intentar' }, 422)

  if (!req.body.nextAppointment) {
    delete req.body.nextAppointment
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
      if (paid !== 0 || amount !== 0) {
        req.body.credit = paid
        req.body.debit = amount
        Account.create(req, res)
      }
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
          { anamnesis: { [Op.like]: `%${filter}%` } },
          { clinicalExamination: { [Op.like]: `%${filter}%` } },
          { diagnosis: { [Op.like]: `%${filter}%` } },
          { treatment: { [Op.like]: `%${filter}%` } },
          sequelize.where(sequelize.literal('pet.name'), 'like', `%${filter}%`),
          sequelize.where(sequelize.literal('customer.name'), 'like', `%${filter}%`)
        ],
        statusId: ACTIVE
      },
      offset,
      limit,
      attributes: [
        'id',
        'customerId',
        'petId',
        [sequelize.col('customer.name'), 'customerName'],
        [sequelize.col('pet.name'), 'petName'],
        [sequelize.fn('date_format', sequelize.col('date'), '%Y-%m-%d'), 'date'],
        'diagnosis',
        [sequelize.fn('date_format', sequelize.col('nextAppointment'), '%Y-%m-%d'), 'nextAppointment'],
        'amount',
        'paymentMethod',
        'paid',
      ],
      order: [
        ['date', 'DESC']
      ],
      include: [
        {
          model: Pet,
          attributes: []
        },
        {
          model: Customer,
          attributes: []
        }
      ]
    })
    .then(consultations => res
      .status(200)
      .json({ success: true, consultations }))
    .catch(err => ReE(res, err, 422))
}
module.exports.getAll = getAll

const getInactive = (req, res) => {
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
          { anamnesis: { [Op.like]: `%${filter}%` } },
          { clinicalExamination: { [Op.like]: `%${filter}%` } },
          { diagnosis: { [Op.like]: `%${filter}%` } },
          { treatment: { [Op.like]: `%${filter}%` } },
          sequelize.where(sequelize.literal('pet.name'), 'like', `%${filter}%`),
          sequelize.where(sequelize.literal('customer.name'), 'like', `%${filter}%`)
        ],
        statusId: INACTIVE
      },
      offset,
      limit,
      attributes: [
        'id',
        'customerId',
        'petId',
        [sequelize.col('customer.name'), 'customerName'],
        [sequelize.col('pet.name'), 'petName'],
        [sequelize.fn('date_format', sequelize.col('date'), '%Y-%m-%d'), 'date'],
        'diagnosis',
        [sequelize.fn('date_format', sequelize.col('nextAppointment'), '%Y-%m-%d'), 'nextAppointment'],
        'amount',
        'paymentMethod',
        'paid',
      ],
      order: [
        ['date', 'DESC']
      ],
      include: [
        {
          model: Pet,
          attributes: []
        },
        {
          model: Customer,
          attributes: []
        }
      ]
    })
    .then(consultations => res
      .status(200)
      .json({ success: true, consultations }))
    .catch(err => ReE(res, err, 422))
}

module.exports.getInactive = getInactive

const getById = (req, res) => {
  return Consultation
    .findOne({
      tableHint: TableHints.NOLOCK,
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'customerId',
        'petId',
        [sequelize.fn('date_format', sequelize.col('date'), '%Y-%m-%d'), 'date'],
        'anamnesis',
        'clinicalExamination',
        'diagnosis',
        'treatment',
        'treatmentStage',
        [sequelize.fn('date_format', sequelize.col('nextAppointment'), '%Y-%m-%d'), 'nextAppointment'],
        'amount',
        'paymentMethod',
        'paid'
      ]
    })
    .then(consultation => res
      .status(200)
      .json({ success: true, consultation }))
    .catch(err => ReE(res, err, 422))
}
module.exports.getById = getById


const getByPet = (req, res) => {

  const limit = parseInt(req.query.limit || 10)
  const page = parseInt(req.query.page || 1)

  const offset = limit * (page - 1)

  return Consultation
    .findAndCountAll({
      tableHint: TableHints.NOLOCK,
      where: {
        statusId: ACTIVE,
        petId: req.params.id
      },
      offset,
      limit,
      attributes: [
        'id',
        [sequelize.fn('date_format', sequelize.col('date'), '%Y-%m-%d'), 'date'],
        'anamnesis',
        'clinicalExamination',
        'diagnosis',
        'treatment',
        'treatmentStage',
        [sequelize.fn('date_format', sequelize.col('nextAppointment'), '%Y-%m-%d'), 'nextAppointment'],
        'amount',
        'paymentMethod',
        'paid',
      ],
      order: [
        ['date', 'DESC']
      ]
    })
    .then(consultations => res
      .status(200)
      .json({ success: true, consultations }))
    .catch(err => ReE(res, err, 422))
}
module.exports.getByPet = getByPet

const getnextAppointments = (req, res) => {
  const Pet = require("../models").pet
  Consultation.belongsTo(Pet);

  const Customer = require("../models").customer
  Consultation.belongsTo(Customer)

  return Consultation
    .findAndCountAll({
      where: {
        [Op.and]: [
          [sequelize.where(sequelize.col('nextAppointment'), '>=', sequelize.fn('CURDATE'))],
          { statusId: ACTIVE }
        ]
      },
      attributes: [
        'id',
        [sequelize.fn('date_format', sequelize.col('nextAppointment'), '%Y-%m-%d'), 'nextAppointment'],
        [sequelize.col('pet.name'), 'petName'],
        [sequelize.col('customer.name'), 'customerName'],
        'customerId',
        'petId'
      ],
      order: [['nextAppointment', 'ASC']],
      include: [
        { model: Pet, attributes: [] },
        { model: Customer, attributes: [] }
      ]
    })
    .then(consultations => res
      .status(200)
      .json({ success: true, consultations }))
    .catch(err => ReE(res, err, 422))
}

module.exports.getnextAppointments = getnextAppointments

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