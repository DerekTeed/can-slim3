import Fetch from 'isomorphic-unfetch';
import Layout from '../../components/Layout';
import Table from '../../components/table.js';
import React, { useState, useEffect } from "react";



import Pagination from '../../components/Pagination';
import stocks from "../../models/stockArray";
//props in react would be terrible for making a table or listing stock info!!!
const Index = (props) => (
  <Layout>
    
    <div>
    <h3>This is going to be an Investing Strategy Website based on the methodology of CAN SLIM Investing</h3>
      <p>The website is just starting to be built. Currently pulling the data from an API and organizing it within a database. </p>
      const 
      
      
    </div>
    {/* <Table/> */}
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