import Fetch from 'isomorphic-unfetch';
import Layout from '../../components/Layout';
import Fable from '../../components/Fable.js';
import React, { useState, useEffect } from "react";
//import filterTable from '../../components/filterTable.js'


import Pagination from '../../components/Pagination';
import stocks from "../../models/stockArray";
//props in react would be terrible for making a table or listing stock info!!!
const filterTablePage = (props) => (
  <Layout>
    
    <div>
    <h3>This is going to be an Investing Strategy Website based on the methodology of CAN SLIM Investing</h3>
      <p>The website is just starting to be built. Currently pulling the data from an API and organizing it within a database. </p>
      const 
      
      
    </div>
    <Fable/>
  </Layout>
);




export default filterTablePage;