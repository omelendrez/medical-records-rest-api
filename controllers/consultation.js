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
  const Category = require("../models").category;
  const Unit = require("../models").unit;
  const Company = require("../models").company;
  const Status = require("../models").status;
  Consultation.belongsTo(Category);
  Consultation.belongsTo(Unit);
  Consultation.belongsTo(Company);
  Consultation.belongsTo(Status);
  return Consultation
    .findAll({
      raw: true,
      tableHint: TableHints.NOLOCK,
      attributes: [
        'id',
        'code',
        'name',
        'minimum',
        [sequelize.fn('date_format', sequelize.col('lastPurchaseDate'), '%d-%b-%y'), 'lastPurchaseDate'],
        'lastPurchasePrice',
        [sequelize.fn('date_format', sequelize.col('lastSaleDate'), '%d-%b-%y'), 'lastSaleDate'],
        'lastSalePrice',
        'price',
        'categoryId', [sequelize.col('category.name'), 'category'],
        //        'unitId', [sequelize.col('unit.name'), 'unit'],
        'companyId', [sequelize.col('company.name'), 'company'],
        'statusId', [sequelize.col('status.name'), 'status']
      ],
      include: [{
        model: Category,
        where: {
          id: sequelize.col('consultation.categoryId')
        },
        attributes: []
      }, {
        model: Unit,
        where: {
          id: sequelize.col('consultation.unitId')
        },
        attributes: []
      }, {
        model: Company,
        where: {
          id: sequelize.col('consultation.companyId')
        },
        attributes: []
      }, {
        model: Status,
        where: {
          id: sequelize.col('consultation.statusId')
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
