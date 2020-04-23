const Consultation = require('../models').consultation
const Sequelize = require('sequelize')
const TableHints = Sequelize.TableHints;
const Op = Sequelize.Op
const sequelize = require("sequelize");
const { ReS, ReE, updateOrCreate } = require('../helpers')

const create = async (req, res) => {
  const { id, date, diagnosis, treatment } = req.body

  if (!date || !diagnosis || !treatment) {
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
  const Pet = require("../models").pet;
  Consultation.belongsTo(Pet);

  const filter = req.query.filter || ''

  return Consultation
    .findAndCountAll({
      tableHint: TableHints.NOLOCK,
      where: {
        [Op.or]: [
          { diagnosis: { [Op.like]: `%${filter}%` } },
          { treatment: { [Op.like]: `%${filter}%` } }
        ],
        statusId: 1
      },
      attributes: [
        'id',
        'petId',
        [sequelize.fn('date_format', sequelize.col('date'), '%d-%b-%y'), 'date'],
        'diagnosis',
        'treatment',
        [sequelize.fn('date_format', sequelize.col('nextConsultation'), '%d-%b-%y'), 'nextConsultation'],
        'observations'
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
module.exports.getAll = getAll

const getInactive = (req, res) => {
  const Pet = require("../models").pet;
  Consultation.belongsTo(Pet);

  return Consultation
    .findAndCountAll({
      tableHint: TableHints.NOLOCK,
      where: {
        statusId: 2
      },
      attributes: [
        'id',
        'petId',
        [sequelize.fn('date_format', sequelize.col('date'), '%d-%b-%y'), 'date'],
        'diagnosis',
        'treatment',
        [sequelize.fn('date_format', sequelize.col('nextConsultation'), '%d-%b-%y'), 'nextConsultation'],
        'observations'
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
        'observations'
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
      consultation.update({ statusId: 1 })
        .then(consultation => {
          const resp = {
            message: `Consulta restaurada`,
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
      consultation.update({ statusId: 2 })
        .then(consultation => {
          const resp = {
            message: `Consulta eliminada`,
            consultation
          }
          return ReS(res, resp, 200)
        })
        .catch(() => ReE(res, 'Error ocurrido intentando restaurar la consulta'))
    )
    .catch(() => ReE(res, 'Error ocurrido intentando restaurar la consulta'))
}
module.exports.restoreRecord = restoreRecord