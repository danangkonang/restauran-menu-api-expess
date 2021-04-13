const models = require('../models');

const Transaction = models.transaction;

exports.index = (req, res) => {
  Transaction.findAll({
    attributes: ['id', 'tableNumber', 'finishedTime', 'subtotal', 'discount', 'serviceCharge', 'tax'],
  }).then((transactions) => res.send(transactions));
};

exports.store = (req, res) => {
  const {
    tableNumber,
  } = req.body;
  Transaction.create({
    tableNumber,
  }).then((transaction) => {
    res.send({
      id: transaction.id,
      tableNumber: req.body.tableNumber,
    });
  })
    .catch((err) => res.send(err));
};

exports.update = (req, res) => {
  Transaction.update({
    tableNumber: req.body.tableNumber,
    // finishedTime: req.body.finishedTime,
    subtotal: req.body.subtotal,
    discount: req.body.discount,
    serviceCharge: req.body.serviceCharge,
    tax: req.body.tax,
  },
  {
    where: {
      id: req.body.transactionId,
    },
  })
    .then((response) => {
      res.send(response);
      console.log(response);
    })
    .catch((err) => {
      res.send(err.message);
    });
};

exports.updateTime = (req, res) => {
  Transaction.update({
    finishedTime: req.body.finishedTime,
  },
  {
    where: {
      id: req.body.transactionId,
    },
  })
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.send(err.message);
    });
};
