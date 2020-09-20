import React, { useState, useEffect, Component } from "react";

//import './app.css'

export default function Table1(props) {
    return (
         <table cellPadding={0} cellSpacing={0}>
            <thead>
                <tr>
                    <th>Symbol</th>
                    <th>Name</th>
                    <th>
                        <button onClick={() => props.sortBy('price')}>
                            Price
                        </button>
                    </th>
                    <th>Price to Revenue</th>
                    <th>EPS</th>
                    <th>EPS Growth</th>
                    <th>Revenue Growth</th>
                    <th>Market Cap</th>
                    <th>EBITDA</th>
                    <th>Long Term Debt</th>
                    <th>52 Week High</th>
                    <th>Price % of 52 Week High</th>
                    <th>Float</th>
                    <th>% Insider Ownership</th>
                    <th>% Institutional Ownership</th>
                    <th>Volume</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map(row => (
                        <tr>
                            <td>{row.symbol}</td>
                            <td>{row.name}</td>
                            <td>${row.price}</td>
                            <td>{row.price_to_revenue}</td>
                            <td>${row.eps}</td>
                            <td>{row.eps_growth}%</td>
                            <td>{row.growth}%</td>
                            <td>${row.marketcap}</td>
                            <td>${row.ebitda}</td>
                            <td>${row.lt_debt}</td>
                            <td>${row.oneyearhigh}</td>
                            <td>{row.price_percent_from_1_yr_hi}%</td>
                            <td>{row.float}</td>
                            <td>{row.insider_own}%</td>
                            <td>{row.percent_institutions_own}%</td>
                            <td>{row.volume}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}