const express = require('express')
const bodyParser = require('body-parser')
const pg = require('pg')
const cors = require('cors')
const morgan = require('morgan');
const { response } = require('express');
const PORT = 5000;
var router = express.Router();



let pool = new pg.Pool({
    port: 5434,
    password: 'light444',
    database: 'stocks_CAN_db',
    max: 10,
    host: 'localhost',
    user: 'Derek'
})


const app = express();
app.use(cors());
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    //res.header("Access-Control-Allow-Methods", "GET", "PUT", "POST", "DELETE", "OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.post('/apiCreate', function (request, response) {
    //  var id = request.body.id;
      var symbol = request.body.symbol;
      var name = request.body.name;
      var price = request.body.price;
      var marketcap = request.body.marketcap;
      var debt = request.body.debt;
      var growth = request.body.growth;
      var values = [ symbol, name, price, marketcap, debt, growth]
      console.log('weoweo',symbol)
      pool.connect((err, db, done) => {
          if (err) {
              return response.status(400).send(err)
          } else {
              db.query('insert into stock_list ( symbol ,name, price, marketcap, debt, growth ) values($1,$2,$3,$4,$5,$6)', [...values], (err, table) => {
                  if (err) {
                      return response.status(400).send(err)
                  }
                  else {
                      //console.log(table.rows)
                      console.log('data inserted')
                      db.end()
                      response.status(201).send({ message: 'Data inserted!' })
                  }
              })
  
          }
      })
  })

app.delete('/api/removeStock/:id', function(request, response) {
    var id = request.params.id;
    pool.connect(function(err,db, done) {
        if(err) {
            return response.status(400).send(err)
        } else {
            db.query('DELETE from stock_list where id = $1', [Number(id)], function(err, result) {
                if(err) {
                    return response.status(400).send(err)
                } else {
                    return response.status(200).send({message: 'success in deleting record'})
                }
            })
        }
    })
})

//This specifically places the db data onto /api/pullfromDBstocks
app.get('/api/pullfromDBstocks', function (request,response) {
    pool.connect((err, db, done) => {
        if(err) {
            return response.status(400).send(err)
        } else {
            db.query('select * from stock_list', function(err, table) {
                done()
                if(err) {
                    return response.status(400).send(err)
                } else {
                    return response.status(200).send(table.rows)
                }
            })
        }
    })
})


// app.post('/api/newStock', function (request, response) {
//     //  var id = request.body.id;
//       var symbol = request.body.symbol;
//       var name = request.body.name;
//       var price = request.body.price;
//       var marketcap = request.body.marketcap;
//       var debt = request.body.debt;
//       var growth = request.body.growth;
//       var values = [ symbol, name, price, marketcap, debt, growth]
  
//       pool.connect((err, db, done) => {
//           if (err) {
//               return response.status(400).send(err)
//           } else {
//               db.query('insert into stock_list ( symbol ,name, price, marketcap, debt, growth ) values($1,$2,$3,$4,$5,$6)', [...values], (err, table) => {
//                   if (err) {
//                       return response.status(400).send(err)
//                   }
//                   else {
//                       //console.log(table.rows)
//                       console.log('data inserted')
//                       db.end()
//                       response.status(201).send({ message: 'Data inserted!' })
//                   }
//               })
  
//           }
//       })
//   })


app.post('/api/newStock', function (request, response) {
  //  var id = request.body.id;
    var symbol = request.body.symbol;
    var name = request.body.name;
    var price = request.body.price;
    var marketcap = request.body.marketcap;
    var debt = request.body.debt;
    var growth = request.body.growth;
    var values = [ symbol, name, price, marketcap, debt, growth]

    pool.connect((err, db, done) => {
        if (err) {
            return response.status(400).send(err)
        } else {
            db.query('insert into stock_list ( symbol ,name, price, marketcap, debt, growth ) values($1,$2,$3,$4,$5,$6)', [...values], (err, table) => {
                if (err) {
                    return response.status(400).send(err)
                }
                else {
                    //console.log(table.rows)
                    console.log('data inserted')
                    db.end()
                    response.status(201).send({ message: 'Data inserted!' })
                }
            })

        }
    })
})


app.listen(PORT, () => console.log('listening on port ' + PORT))
//const pgp = require('pg-promise')();