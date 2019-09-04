const express = require('express')
// const bodyParser = require('body-parser')
const app = express()
const ControllersCategori = require('../controllers/categori')
const ControllersMenu = require('../controllers/menu')





app.get('/menus',ControllersMenu.index)
app.get('/categories',ControllersCategori.index)

app.get('/', (req, res) => res.send('Hello Danang'))

module.exports = app;