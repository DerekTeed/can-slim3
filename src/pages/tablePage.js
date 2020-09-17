import React, { useState, useEffect, Component } from "react";

import BootstapTable from 'react-bootstrap-table-next';
import axios from 'axios';
import paginationFactory from 'react-bootstrap-table2-paginator';
import * as ReactBootStrap from 'react-bootstrap';
import { readString } from 'react-papaparse'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
//import 'bootstrap/dist/css/bootstrap.min.css';


const Table = () => {
       const [players, setPlayers] = useState([]);
       const [loading, setLoading] = useState(false);
        const getPlayerData = async () => {
            try { 
                const stockData = await axios.get(
                    'https://stocklistdb.s3.us-east-2.amazonaws.com/mc_growth_price_insider_inst1.csv'
                );
                const results = readString(stockData.data)
                console.log(results.data[0])
                    setPlayers(results.data)
                //console.log(stockData.data);
                
            } catch (e) {
                console.log(e)
            }
        }
        //You are currently trying to figure out what columns to use
        const columns = [

        {dataField: [0], text: "Symbol"},
        {dataField: [1], text: "Market Cap"},
        {dataField: [2], text: "Debt Ratio"},
        {dataField: [3], text: "Growth"},
        {dataField: [4], text: "ID"},
        {dataField: [5], text: "One Year High"},
        {dataField: [6], text: "Price"},
        {dataField: [7], text: "EPS"},
        {dataField: [8], text: "Float"},
        {dataField: [9], text: "Inside Ownership"},
        {dataField: [10], text: "% Insitutional Ownership"},
        {dataField: [11], text: "% from ONe Year High"},
        {dataField: [12], text: "Price to Revenue"},
        {dataField: [13], text: "Volume"},
        {dataField: [14], text: "Long Term Debt"},
        {dataField: [15], text: "EBITDA"},
         ]

     useEffect(() => {
         getPlayerData();
     }, []);  

     return <div className="Table">
     <BootstapTable 
     keyField='name'
     data={players}
     columns={columns}
     pagination= {paginationFactory()}
     />
     </div>
}



export default Table;


// import Layout from '../../components/Layout';
// import React, { Component } from 'react';
// import Table from '../../components/table.js';
// //import Pagination from '../../components/Pagination';

// const tablePage = () => ( 
   


//     <Layout>
    
//     <div>
     

//     <h3>This is going to be an Investing Strategy Website based on the methodology of CAN SLIM Investing</h3>
//       <p>The website is just starting to be built. Currently pulling the data from an API and organizing it within a database. </p>
//       const 
      
      
//     </div>
//     <Table/>
//   </Layout>
// )




// // app.get("/routes/readCsv", async function (req, res) {
// //     mc_growth_price_insider_inst_stocks()
// //     res.json("Your Terminal is lighting up with CSV stocks")
// //     // console.log(csvData)
// // });



// export default tablePage;
