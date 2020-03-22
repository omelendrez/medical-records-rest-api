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
  const Company = require("../models").company;
  const Status = require("../models").status;
  Pet.belongsTo(Company);
  Pet.belongsTo(Status);
  return Pet
    .findAll({
      raw: true,
      tableHint: TableHints.NOLOCK, attributes: ['id', 'code', 'name', 'address', 'phoneNumber', 'contact',
        'companyId', [sequelize.col('company.name'), 'company'],
        'statusId', [sequelize.col('status.name'), 'status'],
      ],
      include: [{
        model: Company,
        where: {
          id: sequelize.col('pet.companyId')
        },
        attributes: []
      }, {
        model: Status,
        where: {
          id: sequelize.col('pet.statusId')
        },
        attributes: []
      }]

    })
    .then(pets => res
      .status(200)
      .json({ success: true, pets }))
    .catch(err => ReE(res, err, 422))
}
module.exports.getAll = getAll

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
            message: `Proveedor "${pet.name}" eliminada`,
            pet
          }
          return ReS(res, resp, 200)
        })
        .catch(() => ReE(res, 'Error ocurrido intentando eliminar el proveedor'))
    )
    .catch(() => ReE(res, 'Error ocurrido intentando eliminar el proveedor'))
}
module.exports.deleteRecord = deleteRecord