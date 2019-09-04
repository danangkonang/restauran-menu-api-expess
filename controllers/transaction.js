const models = require('../models')
const Transaction = models.transaction

exports.index=(req, res)=>{
   Transaction.findAll({
      attributes: ['id', 'tableNumber','finishedTime','subtotal','discount','serviceCharge','tax']
   }).then(transactions=>res.send(transactions))
}

exports.store=(req, res)=>{
   const {
       tableNumber
   } = req.body
   Transaction.create({
      tableNumber: tableNumber,
   }).then(transaction=> {
      res.send({
         id:transaction.id,
         tableNumber:req.body.tableNumber
      })
   })
   .catch(err => res.send(err))
}