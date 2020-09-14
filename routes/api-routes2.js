const Fetch = require('isomorphic-unfetch');
const stocks = require("../models/stockArray2");
const express = require('express')
const bodyParser = require('body-parser')
const pg = require('pg')
const cors = require('cors')
const morgan = require('morgan');
const { response } = require('express');
const PORT = 5003;
//var router = express.Router();
require('dotenv').config()



let pool = new pg.Pool({
    port: 5434,
    password: process.env.dbpassword, 
    database: 'stocks_CAN_db',
    max: 19000,
    host: 'localhost',
    user: 'Derek'
    // max_connection: 200,
    // shared_buffers: 80
    //evict:10000000,
    // idleTimeoutMillis: 0,
    // connectionTimeoutMillis: 0
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
app.listen(PORT, () => console.log('listening on port ' + PORT))


async function getAllStockData() {

    for (var i = 0; i < stocks.length; i++) {

        // const URLName = await Fetch("https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=General::Name");
        // const URLNameData = await URLName.json();


        // const URLStockPrice = await Fetch("https://eodhistoricaldata.com/api/eod/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&fmt=json&filter=last_close");
        // const URLStockPriceData = await URLStockPrice.json();
        // const URLStockPriceData2 = URLStockPriceData.toFixed(2)
        

        // const URLMarketCapitalization = await Fetch("https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=Highlights::MarketCapitalization");
        // const URLMarketCapitalizationData = await URLMarketCapitalization.json();
        const URLToQuarterDebt = await Fetch("https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=Highlights::MostRecentQuarter");
        const mostRecentQuarter = await URLToQuarterDebt.json();
        const URLToQuarterDebt2 = await Fetch("https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=Financials::Balance_Sheet::quarterly::" + mostRecentQuarter + "::longTermDebt")
        const totalDebt = await URLToQuarterDebt2.json();
        const URLEBITDA = await Fetch("https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=Highlights::EBITDA");
        const URLEBITDAData = await URLEBITDA.json();

        // const qtrGrowthYOY = await Fetch("https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=Highlights::QuarterlyRevenueGrowthYOY");
        // const qtrGrowthYOYData = await qtrGrowthYOY.json();
        // const debtRatio = (totalDebt / URLEBITDAData).toFixed(2)
        // const week52High = await Fetch ("https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=Technicals::52WeekHigh")
        // const week52High2 = await week52High.json();
        // const DilutedEpsTTM = await Fetch("https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=Highlights::DilutedEpsTTM");
        // const DilutedEpsTTM2 = await DilutedEpsTTM.json();
        // const SharesFloat = await Fetch("https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=SharesStats::SharesFloat");
        // const SharesFloat2 = await SharesFloat.json();
        // const insider_own1 = await Fetch("https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=SharesStats::PercentInsiders");
        // const insider_own2 = await insider_own1.json();
        // const percent_institutions1 = await Fetch("https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=SharesStats::PercentInstitutions");
        // const percent_institutions2 = await percent_institutions1.json();
        // const percentfrom52weeks3 = (URLStockPriceData / week52High2 ).toFixed(2)
        // const PriceSalesTTM = await Fetch("https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=Valuation::PriceSalesTTM");
        // const PriceSalesTTM2 = await PriceSalesTTM.json();
        // const volume1 = await Fetch("https://eodhistoricaldata.com/api/eod/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&fmt=json&filter=last_volume");
        // const volume2 = await volume1.json();
       
        // var symbol = stocks[i]
        // var name = URLNameData
        // var price = URLStockPriceData2
        // var marketcap = URLMarketCapitalizationData
        var lt_debt = totalDebt
        var ebitda = URLEBITDAData
        // var growth = qtrGrowthYOYData
        // var oneyearhigh = week52High2
        // var eps = DilutedEpsTTM2
        // var float = SharesFloat2
        // var insider_own = insider_own2
        // var percent_institutions_own = percent_institutions2
        // var price_percent_from_1_yr_hi = percentfrom52weeks3
        // var price_to_revenue = PriceSalesTTM2
        // var volume = volume2
        
        symbol = stocks[i];
        var values = [lt_debt, ebitda, symbol]
        console.log('here is ', stocks[i])
        pool.connect((err, db, done) => {
            if (err) {
                return response.status(400).send(err)
            } else {
                console.log(values)
                db.query('update stock_list set lt_debt = $1, ebitda = $2 where symbol = $3' , [...values]
                  
                )

            } 
        })
    }
}


app.get("/routes/api-routes", async function (req, res) {
    getAllStockData()
    res.json("Your Terminal is lighting up with stock API data pulls")
});



// //This specifically places the db data onto /api/pullfromDBstocks2 when loading http://localhost:5002/api/pullfromDBstocks2 only
// app.get('/api/pullfromDBstocks2', function (request, response) {
//     pool.connect((err, db, done) => {
//         if (err) {
//             return response.status(400).send(err)
//         } else {
//             db.query('select * from stock_list', function (err, table) {
//                 done()
//                 if (err) {
//                     return response.status(400).send(err)
//                 } else {
//                     return response.status(200).send(table.rows)
//                 }
//             })
//         }
//     })
// })


