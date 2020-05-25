const Account = require('../models').account
const Sequelize = require('sequelize')
const TableHints = Sequelize.TableHints;
const Op = Sequelize.Op
const sequelize = require("sequelize");
const { ReS, ReE, updateOrCreate } = require('../helpers')

const create = async (req, res) => {
  const { id, date, credit, debit } = req.body

  if (!date || (!credit && !debit)) {
    return ReE(res, { success: false, message: 'Faltan datos. Complete los datos faltantes y vuelva a intentar' }, 422)
  }

  await updateOrCreate(Account,
    {
      id: {
        [Op.eq]: id
      }
    },
    req.body
  )
    .then(record => {

      Account
        .findAll({
          tableHint: TableHints.NOLOCK,
          where: {
            customerId: record.customerId
          },
          attributes: [
            [sequelize.fn('sum', sequelize.literal('debit-credit')), 'debt']
          ]
        })
        .then(account => {
          const debt = account[0].toJSON().debt
          const Customer = require('../models').customer
          Customer
            .findOne({
              tableHint: TableHints.NOLOCK,
              where: {
                id: record.customerId
              }
            })
            .then(customer => {
              customer.update({ balance: debt })
            })

          const resp = {
            message: 'Datos guardados satisfactoriamente',
            record
          }
          ReS(res, resp, 201)
        })


    })
    .catch(err => ReE(res, err, 422))
}
module.exports.create = create

const getAll = (req, res) => {

  return Account
    .findAndCountAll({
      where: {
        customerId: req.params.id
      },
      tableHint: TableHints.NOLOCK,
      attributes: [
        [sequelize.fn('date_format', sequelize.col('date'), '%Y-%m-%d'), 'date'],
        'credit',
        'debit'
      ]
    })
    .then(accounts => res
      .status(200)
      .json({ success: true, accounts }))
    .catch(err => ReE(res, err, 422))
}
module.exports.getAll = getAll