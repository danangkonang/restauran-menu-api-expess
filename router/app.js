const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// const conn = require('../db')

app.use(bodyParser.json());
const ControllersCategori = require('../controllers/categori');
const ControllersMenu = require('../controllers/menu');
const ControllersTransaction = require('../controllers/transaction');
const ControllersOrder = require('../controllers/order');

app.get('/categories', ControllersCategori.index);
app.get('/menus', ControllersMenu.index);
app.get('/transactions', ControllersTransaction.index);
app.post('/transaction', ControllersTransaction.store);
app.post('/updateTransaction', ControllersTransaction.update);
app.post('/order', ControllersOrder.stores);
app.get('/orders', ControllersOrder.orederByTransactionId);

app.post('/finishTransaction', ControllersTransaction.updateTime);
app.post('/finishOrder', ControllersOrder.updateStatus);
// app.post('/order',(req,res)=>{
//    console.log(req.body)
//    res.send(req.body)
// })

// app.get('/sql/biasa',(req,res)=>{
//    conn.query('SELECT id,name FROM categoris', (err, results)=>{
//       if (err) throw err
//       res.send(results)
//     })
// })

app.get('/', (req, res) => res.send('Hello Danang'));

module.exports = app;
