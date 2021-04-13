const models = require('../models');

const Order = models.order;

exports.index = (req, res) => {
  Order.findAll({
    attributes: ['id', 'menuId', 'transactionId', 'qty', 'price', 'status'],
  }).then((orders) => res.send(orders));
};

exports.orederByTransactionId = (req, res) => {
  Order.findAll({
    attributes: ['id', 'menuId', 'transactionId', 'qty', 'price', 'status'],
    where: {

    },
  }).then((orders) => res.send(orders));
};

exports.stores = (req, res) => {
  Order.bulkCreate(
    req.body, {
      returning: ['id'],
    },
  ).then((result) => {
    res.send(result);
  });
};

exports.updateStatus = (req, res) => {
  Order.update({
    status: 1,
  },
  {
    where: {
      transactionId: req.body.transactionId,
    },
  })
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.send(err.message);
    });
};
