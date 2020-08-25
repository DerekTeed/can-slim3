import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

import Prices from '../components/Prices';

const Index = (props) => (
  <Layout>
    <div>
      <h1>Welcome to BitzPrice</h1>
      <p>Check current Stock Price, first test Aug 25</p>
      <Prices stockapi = { props.stockapi } />
     
    </div>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await Fetch('https://finnhub.io/api/v1/quote?symbol=AAPL&token=bt2m8u748v6sj2tj1bm0');
  const data = await res.json();

  return {
    stockapi: data
  };
}

export default Index;