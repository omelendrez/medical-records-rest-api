const Pet = require('../models').pet
const Sequelize = require('sequelize')
const TableHints = Sequelize.TableHints;
const Op = Sequelize.Op
const sequelize = require("sequelize");
const { ReS, ReE, updateOrCreate } = require('../helpers')

const create = async (req, res) => {
  const { id, name, type, breed, sex, yearBorn } = req.body

  if (!name || !type || !breed || !sex || !yearBorn) {
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
  const Status = require("../models").status;
  Pet.belongsTo(Status);

  const filter = req.query.filter || ''

  return Pet
    .findAndCountAll({
      tableHint: TableHints.NOLOCK,
      where: {
        name: {
          [Op.like]: `%${filter}%`
        }
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
        'observations'
      ],
      include: [{
        model: Status,
        where: {
          id: sequelize.col('pet.statusId')
        },
        attributes: [
          'id',
          'name'
        ]
      }]
    })
    .then(pets => res
      .status(200)
      .json({ success: true, pets }))
    .catch(err => ReE(res, err, 422))
}
module.exports.getAll = getAll

const getById = (req, res) => {

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
      ]
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
      pet.destroy()
        .then(pet => {
          const resp = {
            message: `Paciente "${pet.name}" eliminada`,
            pet
          }
          return ReS(res, resp, 200)
        })
        .catch(() => ReE(res, 'Error ocurrido intentando eliminar el paciente'))
    )
    .catch(() => ReE(res, 'Error ocurrido intentando eliminar el paciente'))
}
module.exports.deleteRecord = deleteRecord