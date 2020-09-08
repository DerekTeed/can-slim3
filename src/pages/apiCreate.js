
// import Fetch from 'isomorphic-unfetch';
// import Layout from '../../components/Layout';
// import React, { Component } from 'react';

// import stocks from "../../models/stockArray";

// class apiCreate extends Component {

//     //constructor(props: any) {
//     constructor(props) {
//         super(props);
//         this.state = {
//             title: 'apiDb application',
//             stocks: []
//         }
//     }
//     //Make AJAX calls
//     componentDidMount() {
//         let that = this;
//         console.log('Component has Mounted')
//         fetch('http://localhost:5000/api/pullfromDBstocks')
//             .then(function (response) {
//                 response.json()
//                     .then(function (data) {
//                         that.setState({
//                             stocks: data
//                         })
//                     })
//             })
//     }

//     // apiCreate() {
//     //     var that = this;
//     //     event.preventDefault();
//     //     console.log('in method')

//     //     let stock_data = {

//     //         // id: this.refs.id.value,
//     //         stockSymbol: stocks[i],
//     //         URLNameData: URLNameData,
//     //         URLStockPriceData: URLStockPriceData2,
//     //         URLMarketCapitalizationData: URLMarketCapitalizationData,
//     //         debtRatio: debtRatio,
//     //         qtrGrowthYOYData: qtrGrowthYOYData
//     //     };
//     //     var request = new Request('http://localhost:5000/api/apiCreate', {
//     //         method: 'POST',
//     //         headers: new Headers({ 'Content-Type': 'application/json' }),
//     //         body: JSON.stringify(stock_data)
//     //     });

//     //     let stocks = that.state.stocks;
//     //     stocks.push(stock_data)
//     //     //stocks.concat(stock_data);
//     //     that.setState({
//     //         stocks: stocks
//     //     })
//     //     //xmlhttprequest()
//     //     fetch(request)
//     //         .then(function (response) {
//     //             response.json()
//     //                 .then(function (data) {
//     //                 })
//     //         })
//     //         .catch(function (err) {
//     //             console.log(err)
//     //         })
//     // }
    
//     addStocks2 = async function () {
       
//         // var that = this;
//         // event.preventDefault();
//         // console.log('in method')
       
//         // let stock_data = {
            
//         //    // id: this.refs.id.value,
//         //     symbol: this.refs.symbol.value,
//         //     name: this.refs.name.value,
//         //     price: this.refs.price.value,
//         //     marketcap: this.refs.marketcap.value,
//         //     debt: this.refs.debt.value,
//         //     growth: this.refs.growth.value
//         // };
//         // console.log('weeeO stock data',stock_data)
//         // var request = new Request('http://localhost:5000/api/apiStocks', {
//         //     method: 'POST',
//         //     headers: new Headers({ 'Content-Type': 'application/json' }),
//         //     body: JSON.stringify(stock_data)
//         // });

//         // let stocks = that.state.stocks;
//         // stocks.push(stock_data)
//         // //stocks.concat(stock_data);
//         // that.setState({
//         //     stocks: stocks
//         // })
//         // //xmlhttprequest()
//         // fetch(request)
//         //     .then(function (response) {
//         //         console.log('helllweo')
//         //         response.json()
//         //             .then(function (data) {

//         //             })
//         //     })
//         //     .catch(function (err) {
//         //         console.log(err)
//         //     })

//         for (var i = 0; i < stocks.length; i++) {

//             const URLName = await Fetch("https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=General::Name");
//             const URLNameData = await URLName.json();
//             const URLStockPrice = await Fetch("https://eodhistoricaldata.com/api/real-time/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&fmt=json&filter=close");
//             const URLStockPriceData = await URLStockPrice.json();
//             const URLStockPriceData2 = (URLStockPriceData).toFixed(2)
//             const URLMarketCapitalization = await Fetch("https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=Highlights::MarketCapitalization");
//             const URLMarketCapitalizationData = await URLMarketCapitalization.json();
//             const URLToQuarterDebt = await Fetch("https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=Highlights::MostRecentQuarter");
//             const mostRecentQuarter = await URLToQuarterDebt.json();
//             const URLToQuarterDebt2 = await Fetch("https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=Financials::Balance_Sheet::quarterly::" + mostRecentQuarter + "::longTermDebtTotal")
//             const totalDebt = await URLToQuarterDebt2.json();
//             const URLEBITDA = await Fetch("https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=Highlights::EBITDA");
//             const URLEBITDAData = await URLEBITDA.json();

//             const qtrGrowthYOY = await Fetch("https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=Highlights::QuarterlyRevenueGrowthYOY");
//             const qtrGrowthYOYData = await qtrGrowthYOY.json();
//             //const qtrGrowthYOYData2 = qtrGrowthYOYData.tofFixed(2)
//             const debtRatio = (totalDebt / URLEBITDAData).toFixed(2)


//         }
       
//         stocksDB = {
//             stockSymbol: stocks[i],
//             URLNameData: URLNameData,
//             URLStockPriceData: URLStockPriceData2,
//             URLMarketCapitalizationData: URLMarketCapitalizationData,
//             debtRatio: debtRatio,
//             qtrGrowthYOYData: qtrGrowthYOYData

//         };
//         return stocksDB;
        
//     }
//     render() {
//         let title = this.state.title;
//         //let stocksDB = this.state.stocks
//         return (
//             <div className="apiDB">
//                 {console.log(stocksDB)}
                
//             </div>
//         )
//     }

// }


//     export default apiCreate;




// handleSubmit(event) {
//     //alert('A list was submitted: ' + this.state.formvalue);
//     event.preventDefault();
//     fetch('api/newStock2', {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             stockSymbol: stocks[i],
//             URLNameData: URLNameData,
//             URLStockPriceData: URLStockPriceData2,
//             URLMarketCapitalizationData: URLMarketCapitalizationData,
//             debtRatio: debtRatio,
//             qtrGrowthYOYData: qtrGrowthYOYData
//         })
//     })
//         .then(res => res.json())
//         .then(data => console.log(data))
//         .catch(err => console.log(err)
// }



// import React, { Component } from 'react';

// class apiCreate extends Component {

// async postData() {

//     try {
//         let result = await fetch('https://webhook.site/b08dbbe2-cc06-4cff-b326-5e6ec8a69f53', {
//             method: 'post',
//             mode: 'no-cors',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-type': 'application/json',
//             },
//             body: JSON.stringify({
//                 key1: "myusername"
//             })
//         })
//         console.log('results weo: ', result)
//     } catch(e) {
//         console.log(e)
//     }
// }

//     render() {
//         return  (
//             <div className="apiCreate">
//                 <button onClick={() => this.postData() }> press to push data</button>
//             </div>
//         )
//     }


// }

// export default apiCreate;

// import stocks from "../models/stockArray";
// import Fetch from 'isomorphic-unfetch';


// //var express = require('express');
// //var router = express.Router();

// /* GET users listing. */
// app.get('/apiCreate', function (req, res, next) {
//     apiCreate()
//     let dataArray = [

//     ]
// });


// // app.get('/apiCreate', function (request,response) {
// //     pool.connect((err, db, done) => {
// //         if(err) {
// //             return response.status(400).send(err)
// //         } else {
// //             db.query('select * from stock_list', function(err, table) {
// //                 done()
// //                 if(err) {
// //                     return response.status(400).send(err)
// //                 } else {
// //                     return response.status(200).send(table.rows)
// //                 }
// //             })
// //         }
// //     })
// // })

// // let dataArray = [
// //     { stockSymbol: stocks[i] },
// //     { URLNameData: URLNameData },
// //     { URLStockPriceData: URLStockPriceData2 },
// //     { URLMarketCapitalizationData: URLMarketCapitalizationData },
// //     { debtRatio: debtRatio },
// //     { qtrGrowthYOYData: qtrGrowthYOYData }
// // ]

// console.log(stockSymbol)

// const blah = async function() {

//     for (var i = 0; i < stocks.length; i++) {

//         const URLName = await Fetch("https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=General::Name");
//         const URLNameData = await URLName.json();
//         const URLStockPrice = await Fetch("https://eodhistoricaldata.com/api/real-time/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&fmt=json&filter=close");
//         const URLStockPriceData = await URLStockPrice.json();
//         const URLStockPriceData2 = (URLStockPriceData).toFixed(2)
//         const URLMarketCapitalization = await Fetch("https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=Highlights::MarketCapitalization");
//         const URLMarketCapitalizationData = await URLMarketCapitalization.json();
//         const URLToQuarterDebt = await Fetch("https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=Highlights::MostRecentQuarter");
//         const mostRecentQuarter = await URLToQuarterDebt.json();
//         const URLToQuarterDebt2 = await Fetch("https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=Financials::Balance_Sheet::quarterly::" + mostRecentQuarter + "::longTermDebtTotal")
//         const totalDebt = await URLToQuarterDebt2.json();
//         const URLEBITDA = await Fetch("https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=Highlights::EBITDA");
//         const URLEBITDAData = await URLEBITDA.json();

//         const qtrGrowthYOY = await Fetch("https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=Highlights::QuarterlyRevenueGrowthYOY");
//         const qtrGrowthYOYData = await qtrGrowthYOY.json();
//         //const qtrGrowthYOYData2 = qtrGrowthYOYData.tofFixed(2)
//         const debtRatio = (totalDebt / URLEBITDAData).toFixed(2)
//         //   db.Report.create({
//         //       companyName: URLNameData,
//         //       stockPrice: URLStockPriceData2,
//         //       marketCap: URLMarketCapitalizationData,
//         //       debtRatio: debtRatio

//         //   })
//          console.log(URLName)
//         return {
//             stockSymbol: stocks[i],
//             URLNameData: URLNameData,
//             URLStockPriceData: URLStockPriceData2,
//             URLMarketCapitalizationData: URLMarketCapitalizationData,
//             debtRatio: debtRatio,
//             qtrGrowthYOYData: qtrGrowthYOYData

//         };
//     }
// }


// export default apiCreate;