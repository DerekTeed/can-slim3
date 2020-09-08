
const Fetch = require('isomorphic-unfetch');
const stocks = require("../models/stockArray");
const express = require('express')
const bodyParser = require('body-parser')
const pg = require('pg')
const cors = require('cors')
const morgan = require('morgan');
const { response } = require('express');
const PORT = 5002;
var router = express.Router();
require('dotenv').config()

// const EOD_KEY='OeAFFmMliFG5orCUuwAKQ8l4WWFQ67YX'

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

async function getAllStockData() {

    for (var i = 0; i < stocks.length; i++) {

        const URLName = await Fetch("https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=General::Name");
        const URLNameData = await URLName.json();
        const URLStockPrice = await Fetch("https://eodhistoricaldata.com/api/real-time/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&fmt=json&filter=close");
        const URLStockPriceData = await URLStockPrice.json();
        const URLStockPriceData2 = (URLStockPriceData).toFixed(2)
        const URLMarketCapitalization = await Fetch("https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=Highlights::MarketCapitalization");
        const URLMarketCapitalizationData = await URLMarketCapitalization.json();
        const URLToQuarterDebt = await Fetch("https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=Highlights::MostRecentQuarter");
        const mostRecentQuarter = await URLToQuarterDebt.json();
        const URLToQuarterDebt2 = await Fetch("https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=Financials::Balance_Sheet::quarterly::" + mostRecentQuarter + "::longTermDebtTotal")
        const totalDebt = await URLToQuarterDebt2.json();
        const URLEBITDA = await Fetch("https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=Highlights::EBITDA");
        const URLEBITDAData = await URLEBITDA.json();

        const qtrGrowthYOY = await Fetch("https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=Highlights::QuarterlyRevenueGrowthYOY");
        const qtrGrowthYOYData = await qtrGrowthYOY.json();
        //const qtrGrowthYOYData2 = qtrGrowthYOYData.tofFixed(2)
        const debtRatio = (totalDebt / URLEBITDAData).toFixed(2)

        var symbol = stocks[i]
        var name = URLNameData
        var price = URLStockPriceData2
        var marketcap = URLMarketCapitalizationData
        var debt = debtRatio
        var  growth = qtrGrowthYOYData
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
        // db.Report.create({
        //     stockSymbol: stocks[i],
        //     URLNameData: URLNameData,
        //     URLStockPriceData: URLStockPriceData2,
        //     URLMarketCapitalizationData: URLMarketCapitalizationData,
        //     debtRatio: debtRatio,
        //     qtrGrowthYOYData: qtrGrowthYOYData
        // })
    }
}


app.get("/routes/api-routes", async function (req, res) {
    getAllStockData()
    res.json("Your Terminal is lighting up with stock API data pulls")  
});


app.post('/routes/api-routes', function (request, response) {
    var symbol = request.body.symbol;
    var name = request.body.name;
    var price = request.body.price;
    var marketcap = request.body.marketcap;
    var debt = request.body.debt;
    var growth = request.body.growth;
    var values = [symbol, name, price, marketcap, debt, growth]
    console.log('weoweo', symbol)
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
