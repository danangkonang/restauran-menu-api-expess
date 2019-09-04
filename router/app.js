const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
const ControllersCategori = require('../controllers/categori')
const ControllersMenu = require('../controllers/menu')
const ControllersTransaction = require('../controllers/transaction')





app.get('/menus',ControllersMenu.index)
app.get('/categories',ControllersCategori.index)
app.get('/transactions',ControllersTransaction.index)
app.post('/transaction',ControllersTransaction.store)

app.get('/', (req, res) => res.send('Hello Danang'))

module.exports = app;