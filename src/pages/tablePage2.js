// import React from "react";
// //import CsvToHtmlTable from "react-csv-to-table";

// //import { sampleData } from "https://stocklistdb.s3.us-east-2.amazonaws.com/mc_growth_price_insider_inst1.csv";
// const sampleData = axios.get("https://stocklistdb.s3.us-east-2.amazonaws.com/mc_growth_price_insider_inst1.csv")
// export const tablePage2 = () => {
//   return (
//     <div className="container">

//       <h2>Simple example to demonstrate CSV to HTML</h2>

//       Your Table would look like below <b>styled with bootstrap</b>
//       <br/><br/>
//       {/* <CsvToHtmlTable
//         data={sampleData}
//         csvDelimiter=","
//         tableClassName="table table-striped table-hover"
//       /> */}


//       <h2>Your CSV data looks like below</h2>
//       <pre>
//       {sampleData}
//       </pre>
//     </div>
//   );
// };

// export default tablePage2;

import { render } from 'react-dom';
import React, { Component } from 'react';
import ReactFileReader from 'react-file-reader';
import { CsvToHtmlTable } from 'react-csv-to-table';
import dynamic from 'next/dynamic';

// const CsvToHtmlTable = dynamic(
//     () => import('react-csv-to-table'),
//     {
//         ssr: false
//     }
// )

class tablePage2 extends Component {

 constructor(props){
    //Need this to load or it cannot gather csv file or windows is not defined
    if (typeof window === 'undefined') {
        global.window = {} 
    }
  super(props);
  this.state = {
    csvData: ''
  };
  
}

handleFiles = files => {
    let reader = new FileReader();
    reader.onload = () => {
      // Use reader.result
      this.setState({
        csvData: reader.result
      })
    }
    reader.readAsText(files[0]);
  }

render() {
return (
    <div>
         <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
                 <button className='btn'>Upload</button>
          </ReactFileReader>
          <CsvToHtmlTable
               data={this.state.csvData || '../data/mc_growth_price_insider_inst1'}
               csvDelimiter=","
               tableClassName="table table-striped table-hover"
           />
   </div>

    );
  }
}

export default tablePage2;