// const fs = require('fs')
// const PORT = 5010;

// require('dotenv').config()
// const bodyParser = require('body-parser')
// const cors = require('cors')
// const morgan = require('morgan');
// const express = require('express');
// //const fetch = require("node-fetch");
// //const { createJSDocPrivateTag } = require('typescript');
// const blah = '../data/mc_growth_price_insider_inst1'
// const app = express();
// app.use(cors());

// app.use(morgan('dev'))
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
// app.listen(PORT, () => console.log('listening on port ' + PORT))
// const readString = require('react-papaparse')



// //Using this to pull data from CSV and to place it on the route below.
// const mc_growth_price_insider_inst_stocks = () => {
   
//     fs.read(blah, function(data) {
//         console.log(data)
//         //whole data set
//         // draw chart here
//     })
//     // d3.csv('../data/mc_growth_price_insider_inst1')
//     //             .row(function(d) { return {key: d.key, value: +d.value}; })
//     //             .get(function(error, rows) {console.log(rows)})
//     //    d3.csv('../data/mc_growth_price_insider_inst1.csv', function (data) {
//     //     console.log(data);
//     // }, function (error, rows) {
//     //     console.log(rows)
//     // }

//     // )
//     // fs.createReadStream('../data/mc_growth_price_insider_inst1.csv')
//     //     .pipe(parse({
//     //         columns: true,
//     //     }))
//     //     .on('data', (row) => {
//     //         console.log(row);

//     //     })
//     //     .on('end', () => {
//     //         console.log('CSV file successfully processed');
//     //     })

// }

// //Places the data onto the url on port + /routes/readCsv
// app.get("/routes/readCsv", async function (req, res) {
//     mc_growth_price_insider_inst_stocks()
//     res.json("Your Terminal is lighting up with CSV stocks")
//     // console.log(csvData)
// });