const mysql = require('mysql')
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'restaurant-api2'
})

conn.connect((err) =>{
  if(err) throw err
    console.log('Mysql Connected...')
  })

module.exports = conn