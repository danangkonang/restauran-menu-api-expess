const models = require('../models')
const Menu = models.menu

exports.index=(req, res)=>{
   Menu.findAll({
      attributes: ['id', 'idCategori','name','price']
   }).then(menus=>res.send(menus))
}