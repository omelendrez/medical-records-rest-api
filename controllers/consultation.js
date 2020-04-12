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
      attributes: [
        'id',
        'petId',
        [sequelize.fn('date_format', sequelize.col('date'), '%d-%b-%y'), 'date'],
        'diagnosis',
        'treatment',
        [sequelize.fn('date_format', sequelize.col('nextConsultation'), '%d-%b-%y'), 'nextConsultation'],
        'observations'
      ],
      include: [{
        model: Pet,
        where: {
          id: sequelize.col('consultation.petID'),
          name: {
            [Op.like]: `%${filter}%`
          }
        },
        attributes: []
      }]
    })
    .then(consultations => res
      .status(200)
      .json({ success: true, consultations }))
    .catch(err => ReE(res, err, 422))
}
module.exports.getAll = getAll

const deleteRecord = (req, res) => {
  return Consultation
    .findOne({
      where: {
        id: req.params.id
      }
    })
    .then(consultation =>
      //consultation.destroy()
      consultation.update({ statusId: 0 })
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