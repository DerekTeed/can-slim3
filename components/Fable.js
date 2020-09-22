
import React, { useState, useEffect, Component } from "react";
//import filterFactory, { textFilter, numberFilter } from 'react-bootstrap-table2-filter';
import BootstapTable from 'react-bootstrap-table-next';
import axios from 'axios';
import paginationFactory from 'react-bootstrap-table2-paginator';
import * as ReactBootStrap from 'react-bootstrap';
import { readString } from 'react-papaparse'



const Fable = () => {
       const [players, setPlayers] = useState([]);
       const [loading, setLoading] = useState(false);
        const getPlayerData = async () => {
            try { 
                const stockData = await axios.get(
                    'https://stocklistdb.s3.us-east-2.amazonaws.com/pr_mc_gr_inst_ins_vol.json'
                );
                //const results = readString(stockData.data)
                console.log(stockData.data)
                setPlayers(stockData.data)
                
                
            } catch (e) {
                console.log(e)
            }
        }
        //You are currently trying to figure out what columns to use
        const columns = [

        {dataField: 'symbol', text: "Symbol", sort: true},
        {dataField: 'name', text: "Name", sort: true},
        {dataField: 'price', text: "Price", sort: true},
        {dataField: 'marketcap', text: "Market Capitalzation", sort: true},
        {dataField: 'price_to_revenue', text: "Price to Revenue", sort: true},
        {dataField: 'growth', text: "Revenue Growth", sort: true},
        {dataField: 'eps', text: "EPS", sort: true},
        {dataField: 'eps_growth', text: "EPS Growth", sort: true},
        {dataField: 'oneyearhigh', text: "One Year High", sort: true},
        {dataField: 'price_percent_from_1_yr_hi', text: "Percent of One Year High", sort: true},
        {dataField: 'volume', text: "Volume", sort: true},
        {dataField: 'float', text: "Float", sort: true},
        {dataField: 'insider_own', text: "Inside Ownership", sort: true},
        {dataField: 'percent_institutions_own', text: "percent Insitutional Ownership", sort: true},
        {dataField: 'lt_debt', text: "Long Term Debt", sort: true},
        {dataField: 'ebitda', text: "EBITDA", sort: true},
         ]

     useEffect(() => {
         getPlayerData();
     }, []);  

     return <div className="Table">
         
     <BootstapTable 
     //bootstrap4
     keyField='symbol'
     data={players}
     columns={columns}
     
     pagination= {paginationFactory()}
     //columns={{whiteSpace:'normal', wordWrap: 'break-word'}}
     
     />
     </div>
}

export default Fable;


