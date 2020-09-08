import Fetch from 'isomorphic-unfetch';
import Layout from '../../components/Layout';
import React, { Component } from 'react';

import Pagination from '../../components/Pagination';
import stocks from "../../models/stockArray";



const Apipull = (props) => (
  <Layout>
    <div>
      <h1>Welcome to CANSLIM stock filter</h1>
      <p>Check current Stock Price, first test Aug 25</p>
      
      {console.log( 'hello',props.qtrGrowthYOYData  )}
      <Pagination stockSymbol = {props.stockSymbol} />
      <Pagination URLNameData = {props.URLNameData} />
      <Pagination URLStockPriceData = {props.URLStockPriceData} />
      <Pagination URLMarketCapitalizationData ={props.URLMarketCapitalizationData} />
      <Pagination debtRatio = {props.debtRatio} />
      <Pagination qtrGrowthYOYData = {props.qtrGrowthYOYData} />
    </div>
  </Layout>
);

Apipull.getInitialProps = async function() {
    for (var i = 0; i < stocks.length; i++) {
  
  const URLName = await Fetch("https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=General::Name");
  const URLNameData = await URLName.json();
  const URLStockPrice = await Fetch("https://eodhistoricaldata.com/api/real-time/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&fmt=json&filter=close");
  const URLStockPriceData = await URLStockPrice.json();
  const URLStockPriceData2 = (URLStockPriceData).toFixed(2)
  const URLMarketCapitalization = await Fetch("https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=Highlights::MarketCapitalization");
  const URLMarketCapitalizationData = await URLMarketCapitalization .json();
  const URLToQuarterDebt = await Fetch("https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=Highlights::MostRecentQuarter");
  const mostRecentQuarter = await URLToQuarterDebt.json();
  const URLToQuarterDebt2 = await Fetch("https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=Financials::Balance_Sheet::quarterly::" + mostRecentQuarter + "::longTermDebtTotal")
  const totalDebt = await URLToQuarterDebt2.json();
  const URLEBITDA= await Fetch("https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=Highlights::EBITDA");
  const URLEBITDAData = await URLEBITDA.json();
  
  const qtrGrowthYOY = await Fetch("https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=Highlights::QuarterlyRevenueGrowthYOY");
  const qtrGrowthYOYData = await qtrGrowthYOY.json();
 //const qtrGrowthYOYData2 = qtrGrowthYOYData.tofFixed(2)
  const debtRatio = (totalDebt/URLEBITDAData).toFixed(2)
//   db.Report.create({
//       companyName: URLNameData,
//       stockPrice: URLStockPriceData2,
//       marketCap: URLMarketCapitalizationData,
//       debtRatio: debtRatio

//   })

  return {
    stockSymbol: stocks[i],
    URLNameData: URLNameData,
    URLStockPriceData: URLStockPriceData2,
    URLMarketCapitalizationData: URLMarketCapitalizationData,
    debtRatio: debtRatio,
    qtrGrowthYOYData: qtrGrowthYOYData

  };
}

}




export default Apipull;