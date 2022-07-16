const Status = require('../models').status
const Sequelize = require('sequelize')
const TableHints = Sequelize.TableHints
const Op = Sequelize.Op
const { ReS, ReE, updateOrCreate } = require('../helpers')

module.exports.create = async (req, res) => {
  await updateOrCreate(Status,
    {
      id: {
        [Op.eq]: null
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

const getAll = (req, res) => {
  return Status
    .findAll({ tableHint: TableHints.NOLOCK, attributes: ['id', 'name'] })
    .then(statuses => res
      .status(200)
      .json({ success: true, statuses }))
    .catch(err => ReE(res, err, 422))
}
module.exports.getAll = getAll

module.exports.deleteRecord = (req, res) => ReE(res, 'La tabla de status es una tabla reservada y sus registros no pueden ser eliminados')
