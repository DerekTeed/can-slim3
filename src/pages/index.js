import Table1 from '../../components/table1.js';
import Layout from '../../components/Layout';
import pr_mc_gr_inst_ins_vol from '../../data/pr_mc_gr_inst_ins_vol.json'
import { render } from 'react-dom';

class Table2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: pr_mc_gr_inst_ins_vol,
      direction: {
        symbol: 'asc',
        Name: 'asc',
        price: 'asc',
        price_to_revenue: 'asc',
        eps: 'asc',
        eps_growth: 'asc',
        growth: 'asc',
        marketcap: 'asc',
        ebitda: 'asc',
        lt_debt: 'asc',
        oneyearhigh: 'asc',
        price_percent_from_1_yr_hi: 'asc',
        float: 'asc',
        insider_own: 'asc',
        percent_institutional_own: 'asc',
        volume: 'asc'
      }
    }
    this.sortBy = this.sortBy.bind(this)
  }

  sortBy(key) {

    this.setState({
      data: pr_mc_gr_inst_ins_vol.sort((a, b) => (
        this.state.direction[key] === 'asc'
          ? parseFloat(a[key]) - parseFloat(b[key])
          : parseFloat(b[key]) - parseFloat(a[key])
      )),
      direction: {
        [key]: this.state.direction[key] === 'asc'
          ? 'desc'
          : 'asc'
      }
    })
  }

  render() {
    return (
      <Layout>
        <h4>This CAN-SLIM Investing Filter attempts to provide you with prefiltered stocks that meet most CAN-SLIM criteria</h4>
        <li>Stocks with 20%+ year over year revenue growth</li>
        <li>Market Capitalization less than $300 million</li>
        <li>Daily Volume greater than 10,000</li>
        <li>Price above $.03</li>
        <li>Inside Ownership Greater than 5%</li>
        <li>Institutional Ownership less than 50%</li>
        <br />
        <p>Click any column to sort in ascending or descending order:</p>
        <div>
        </div>
        <Table1 data={this.state.data}
          sortBy={this.sortBy} />
      </Layout>
    )
  }
};

export default Table2;