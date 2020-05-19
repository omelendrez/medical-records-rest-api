const Consultation = require('../models').consultation
const sequelize = require("sequelize");
const TableHints = sequelize.TableHints;
const Op = sequelize.Op
const { ReE, ACTIVE } = require('../helpers')

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
          { deworming: { [Op.like]: `%${filter}%` } },
          sequelize.where(sequelize.literal('pet.name'), 'like', `%${filter}%`),
          sequelize.where(sequelize.literal('customer.name'), 'like', `%${filter}%`)
        ],
        statusId: ACTIVE,
        deworming: { [Op.ne]: '' }
      },
      separate: true,
      distinct: true,
      offset,
      limit,
      attributes: [
        'id',
        'customerId',
        'petId',
        [sequelize.col('pet.name'), 'petName'],
        [sequelize.col('customer.name'), 'customerName'],
        [sequelize.fn('date_format', sequelize.col('date'), '%d-%b-%y'), 'date'],
        'deworming'
      ],
      order: [
        ['date', 'DESC']
      ],
      include: [{
        model: Pet,
        where: {
          id: sequelize.col('consultation.petId'),
        },
        attributes: [],
      }, {
        model: Customer,
        where: {
          id: sequelize.col('consultation.customerId')
        },
        attributes: [],
      }]

    })
    .then(consultations => res
      .status(200)
      .json({ success: true, consultations }))
    .catch(err => ReE(res, err, 422))
}
module.exports.getAll = getAll