import React, { useState, useEffect, Component } from "react";
// //import csvFile from '../data/mc_growth_price_insider_inst1.csv'

import BootstapTable from 'react-bootstrap-table-next'
import axios from 'axios';



const Table = () => {
    //    const [players, setPlayers] = useState([]);
    //    const [loading, setLoading] = useState(false);
        const getPlayerData = async () => {
            try { 
                const data = await axios.get(
                    'https://stocklistdb.s3.us-east-2.amazonaws.com/mc_growth_price_insider_inst1.csv'
                );
                console.log(data);
            } catch (e) {
                console.log(e)
            }
        }
     useEffect(() => {
         getPlayerData();
     }, []);  

     return <div className="Table"></div>

}



export default Table;












// class Table extends React.Component {
//     constructor(props) {
//             super(props);
//             this.state = {data:[]};
//     }


//     handleForce = data => {
//         console.log(data.length);
//         console.log(data);
//         this.setState({data: data});
//     };

//     handleClick = () => {
//         console.log("success");
//         console.log(this.state.data);/*this is where error occur*/
//     }


//   render() {

//     return (
//     <div className="container">
//     <CSVReader
//       className="csv-input"
//       label="data/mc_growth_price_insider_inst1"
//       onFileLoaded={this.handleForce}
//     />
//     <div>

//     </div>
//     <button onClick={this.handleClick}>
//         Upload
//       </button>
//     </div>

//     );
//   }
// }

// Table.propTypes = {
//   classes: PropTypes.object.isRequired,
// };






// import Layout from './Layout';
// import ReactDOM from 'react-dom'

// //import csvFile from '../data/mc_growth_price_insider_inst1.csv'
// //import stockData from '../data/mc_growth_price_insider_inst1.csv';
// import * as d3 from 'd3';
// //const parse = require('csv-parse');
// import { CSVReader } from 'react-papaparse';
// import axios from 'axios';
// // import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
// // import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
// // import 'bootstrap/dist/css/bootstrap.min.css';


// const Table = () => {

//     const getStockData = () => {
//         csv('../data/mc_growth_price_insider_inst1').then(data => {
//             console.log(data)
//         });
//     }
//     render() {
//         return (
//             <div> {getStockData()}</div>
//         )
//     }

// }



// export default Table;












//export default Table;





// import React, { Component } from 'react';

// class Table extends Component {

//   constructor(props) {
//     // Call super class
//     super(props);

//     // Bind this to function updateData (This eliminates the error)
//     this.updateData = this.updateData.bind(this);
//   }

//   componentWillMount() {

//     // Your parse code, but not seperated in a function
//     var csvFilePath = require("../data/mc_growth_price_insider_inst1.csv");
//     var Papa = require("papaparse/papaparse.min.js");
//     Papa.parse(csvFilePath, {
//       header: true,
//       download: true,
//       skipEmptyLines: true,
//       // Here this is also available. So we can call our custom class method
//       complete: this.updateData
//     });
//   }

//   updateData(result) {
//     const data = result.data;
//     // Here this is available and we can call this.setState (since it's binded in the constructor)
//     this.setState({data: data}); // or shorter ES syntax: this.setState({ data });
//   }

//   render() {
//     // Your render function
//     return <div>Data</div>
//   }
// }

// export default Table;



