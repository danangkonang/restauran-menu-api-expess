'use strict';
module.exports = (sequelize, DataTypes) => {
  const menu = sequelize.define('menu', {
    idCategori: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE
  }, {});
  menu.associate = function(models) {
    // associations can be defined here
  };
  return menu;
};