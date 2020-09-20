import Fetch from 'isomorphic-unfetch';
import Layout from '../../components/Layout';
import Table from '../../components/table.js';
import React, { useState, useEffect } from "react";
import Fable from '../../components/Fable.js';

//props in react would be terrible for making a table or listing stock info!!!
const Index = (props) => (
  <Layout>
    
    <div>
    <h4>This CAN-SLIM Investing Filter attempts to provide you with prefiltered stocks that meet most CAN-SLIM criteria</h4>
      <li>Stocks with 20%+ year over year revenue growth</li>
      <li>Market Capitalization less than $300 million</li>
      <li>Daily Volume greater than 10,000</li>
      <li>Price above $.03</li>
      <li>Inside Ownership Greater than 5%</li>
      <li>Institutional Ownership less than 50%</li>
      
      
    </div>
    <Fable/>
  </Layout>
);

// Index.getInitialProps = async function() {
//     for (var i = 0; i < stocks.length; i++) {
  
//   const URLName = await Fetch("https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=General::Name");
//   const URLNameData = await URLName.json();

//   // const URLStockPrice = await Fetch("https://eodhistoricaldata.com/api/real-time/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&fmt=json&filter=close");
//   // const URLStockPriceData = await URLStockPrice.json();
//   // const URLStockPriceData2 = (URLStockPriceData).toFixed(2)

//   const URLMarketCapitalization = await Fetch("https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=Highlights::MarketCapitalization");
//   const URLMarketCapitalizationData = await URLMarketCapitalization .json();
//   const URLToQuarterDebt = await Fetch("https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=Highlights::MostRecentQuarter");
//   const mostRecentQuarter = await URLToQuarterDebt.json();
//   const URLToQuarterDebt2 = await Fetch("https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=Financials::Balance_Sheet::quarterly::" + mostRecentQuarter + "::longTermDebtTotal")
//   const totalDebt = await URLToQuarterDebt2.json();
//   const URLEBITDA= await Fetch("https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=Highlights::EBITDA");
//   const URLEBITDAData = await URLEBITDA.json();
//   const debtRatio = (totalDebt/URLEBITDAData).toFixed(2)
  
// //   db.Report.create({
// //       companyName: URLNameData,
// //       stockPrice: URLStockPriceData2,
// //       marketCap: URLMarketCapitalizationData,
// //       debtRatio: debtRatio

// //   })

//   return {
//     stockSymbol: stocks[i],
//     URLNameData: URLNameData,
//     //URLStockPriceData: URLStockPriceData2,
//     URLMarketCapitalizationData: URLMarketCapitalizationData,
//     debtRatio: debtRatio

//   };
// }

// }




export default Index;