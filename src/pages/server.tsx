// const express = require('express')
// const bodyParser = require('body-parse')
// const pg = require('pg')
// const morgan = require('morgan')
// const PORT = 5000;
// const app = express();

// let pool = new pg.Pool({
//   port: 5434,
//   password: 'light444',
//   database: 'stocks_CAN_db',
//   max:10,
//   host: 'localhost',
//   user: 'Derek'
// })

// pool.connect((err, db, done) => {
//   if(err) {
//   return console.log(err)
// } else { 
//   db.query(select * from stock_list, (err, table) => {
//   if(err) {
//     return console.log(err)
//   }
//   else {
//     console.log(table)
//   }
// })

// }})

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true}))
// app.use(morgan('dev'))


// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

//   app.listen(PORT, () => console.log('listening on port '+PORT))

// const pgp = require('pg-promise')();

