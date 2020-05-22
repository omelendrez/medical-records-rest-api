const Account = require('../models').account
const Sequelize = require('sequelize')
const TableHints = Sequelize.TableHints;
const Op = Sequelize.Op
const sequelize = require("sequelize");
const { ReS, ReE, updateOrCreate } = require('../helpers')

const create = async (req, res) => {
  const { date, credit, debit } = req.body

  if (!date || (!credit && !debit)) {
    return ReE(res, { success: false, message: 'Faltan datos. Complete los datos faltantes y vuelva a intentar' }, 422)
  }

  await updateOrCreate(Account,
    {
      id: {
        [Op.eq]: undefined
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
            [sequelize.fn('sum', sequelize.literal('credit-debit')), 'debt']
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
