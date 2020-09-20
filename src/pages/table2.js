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
        price: 'asc'
      }
    }
    this.sortBy = this.sortBy.bind(this)
  }

  sortBy(key) {
    
    this.setState({
      data: pr_mc_gr_inst_ins_vol.sort( (a, b) => ( 
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

        <div>
          <h3>React Tables</h3>
        </div>
        <Table1 data={this.state.data}
          sortBy={this.sortBy} />
      </Layout>
    )
  }
};

export default Table2;