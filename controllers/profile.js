const Profile = require('../models').profile
const Sequelize = require('sequelize')
const TableHints = Sequelize.TableHints
const Op = Sequelize.Op
const { ReS, ReE, updateOrCreate } = require('../helpers')

const create = async (req, res) => {
  const { id } = req.params
  const { name } = req.body

  if (!name) {
    return ReE(res, { success: false, message: 'Faltan datos. Complete los datos faltantes y vuelva a intentar' }, 422)
  }

  await updateOrCreate(Profile,
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
      ReS(res, resp, 201)
    })
    .catch(err => ReE(res, err, 422))
}
module.exports.create = create

const getAll = (req, res) => {

  return Profile
    .findAndCountAll({
      tableHint: TableHints.NOLOCK
    })
    .then(companies => res
      .status(200)
      .json({ success: true, companies }))
    .catch(err => ReE(res, err, 422))
}
module.exports.getAll = getAll
