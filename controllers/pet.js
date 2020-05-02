const Pet = require('../models').pet
const Sequelize = require('sequelize')
const TableHints = Sequelize.TableHints;
const Op = Sequelize.Op
const sequelize = require("sequelize");
const { ReS, ReE, updateOrCreate, ACTIVE, INACTIVE } = require('../helpers')

const create = async (req, res) => {
  const { id, name, type, breed, sex, yearBorn, customerId } = req.body

  if (!name || !type || !breed || !sex || !yearBorn || !customerId) {
    return ReE(res, { success: false, message: 'Faltan datos. Complete los datos faltantes y vuelva a intentar' }, 422)
  }

  await updateOrCreate(Pet,
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
  const filter = req.query.filter || ''
  const limit = parseInt(req.query.limit || 10)
  const page = parseInt(req.query.page || 1)

  const offset = limit * (page - 1)

  return Pet
    .findAndCountAll({
      tableHint: TableHints.NOLOCK,
      where: {
        name: {
          [Op.like]: `%${filter}%`
        },
        statusId: ACTIVE
      },
      offset,
      limit,
      attributes: [
        'id',
        'customerId',
        'name',
        'type',
        'breed',
        'sex',
        'weight',
        'yearBorn',
        'observations'
      ]
    })
    .then(pets => res
      .status(200)
      .json({ success: true, pets }))
    .catch(err => ReE(res, err, 422))
}
module.exports.getAll = getAll

const getInactive = (req, res) => {
  const filter = req.query.filter || ''
  const limit = parseInt(req.query.limit || 10)
  const page = parseInt(req.query.page || 1)

  const offset = limit * (page - 1)

  return Pet
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
        'customerId',
        'name',
        'type',
        'breed',
        'sex',
        'weight',
        'yearBorn',
        'observations'
      ]
    })
    .then(pets => res
      .status(200)
      .json({ success: true, pets }))
    .catch(err => ReE(res, err, 422))
}
module.exports.getInactive = getInactive

const getById = (req, res) => {
  const Consultation = require('../models').consultation
  Pet.hasMany(Consultation)
  return Pet
    .findOne({
      tableHint: TableHints.NOLOCK,
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'customerId',
        'name',
        'type',
        'breed',
        'sex',
        'weight',
        'yearBorn',
        'observations',
        'statusId'
      ],
      order: [
        [Consultation, sequelize.col('date'), 'DESC']
      ],
      include: [{
        model: Consultation,
        where: {
          petId: sequelize.col('pet.id')
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
        required: false,
      }]
    })
    .then(pet => res
      .status(200)
      .json({ success: true, pet }))
    .catch(err => ReE(res, err, 422))
}
module.exports.getById = getById

const deleteRecord = (req, res) => {
  return Pet
    .findOne({
      where: {
        id: req.params.id
      }
    })
    .then(pet =>
      //pet.destroy()
      pet.update({ statusId: INACTIVE })
        .then(pet => {
          const resp = {
            message: `Paciente "${pet.name}" eliminado`,
            pet
          }
          return ReS(res, resp, 200)
        })
        .catch(() => ReE(res, 'Error ocurrido intentando eliminar el paciente'))
    )
    .catch(() => ReE(res, 'Error ocurrido intentando eliminar el paciente'))
}
module.exports.deleteRecord = deleteRecord

const restoreRecord = (req, res) => {
  return Pet
    .findOne({
      where: {
        id: req.params.id
      }
    })
    .then(pet =>
      //pet.destroy()
      pet.update({ statusId: ACTIVE })
        .then(pet => {
          const resp = {
            message: `Paciente "${pet.name}" restaurado`,
            pet
          }
          return ReS(res, resp, 200)
        })
        .catch(() => ReE(res, 'Error ocurrido intentando restaurar el paciente'))
    )
    .catch(() => ReE(res, 'Error ocurrido intentando restaurar el paciente'))
}
module.exports.restoreRecord = restoreRecord