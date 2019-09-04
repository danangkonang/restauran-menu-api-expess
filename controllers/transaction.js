const models = require('../models')
const Categori = models.categori

exports.index=(req, res)=>{
   Categori.findAll({
      //  attributes: ['id', 'name','address','price','images']
   }).then(categoris=>res.send(categoris))
}

exports.store=(req, res)=>{
   const {
       tableNumber
   } = req.body
   Categori.create({
      tableNumber: tableNumber,
   }).then(categori=> res.send(categori))
   .catch(err => res.send(err))
}