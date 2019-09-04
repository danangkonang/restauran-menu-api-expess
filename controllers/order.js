const models = require('../models')
const Order = models.order

exports.index=(req, res)=>{
   Order.findAll({
      //  attributes: ['id', 'name','address','price','images']
   }).then(orders=>res.send(orders))
}