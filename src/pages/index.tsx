import Fetch from 'isomorphic-unfetch';
import Layout from '../../components/Layout';

import Pagination from '../../components/Pagination';
import stocks from "../../models/stockArray";

const Index = (props) => (
  <Layout>
    <div>
      <h1>Welcome to BitzPrice</h1>
      <p>Check current Stock Price, first test Aug 25</p>
      
      {console.log( 'hello',props.debtRatio  )}
      <Pagination URLNameData = { props.URLNameData} />
      <Pagination URLStockPriceData = {props.URLStockPriceData} />
      <Pagination URLMarketCapitalizationData ={props.URLMarketCapitalizationData} />
      <Pagination debtRatio = {props.debtRatio} />
    </div>
  </Layout>
);

Index.getInitialProps = async function() {
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
    debtRatio: debtRatio

  };
}

}




export default Index;