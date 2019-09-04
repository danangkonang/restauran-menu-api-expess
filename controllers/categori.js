const models = require('../models')
const Categori = models.categori

exports.index=(req, res)=>{
   Categori.findAll({
      attributes: ['id','name']
   }).then(categories=>res.send(categories))
}