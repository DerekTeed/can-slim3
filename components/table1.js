import React, { useState, useEffect, Component } from "react";

import '../css/App.css'

export default function Table1(props) {
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    return (
        <table cellPadding={0} cellSpacing={0} id="stockTable">
            <thead>
                <tr>
                    <th><button className="button" onClick={() => props.sortBy('symbol')}>
                        Symbol
                        </button></th>
                    <th><button className="button" onClick={() => props.sortBy('name')}>
                        Name
                        </button></th>
                    <th>
                        <button className="button" onClick={() => props.sortBy('price')}>
                            Price
                        </button>
                    </th>
                    <th><button className="button" onClick={() => props.sortBy('price_to_revenue')}>
                        Price to Revenue
                        </button></th>
                    <th><button className="button" onClick={() => props.sortBy('eps')}>
                        EPS
                        </button></th>
                    <th><button className="button" onClick={() => props.sortBy('eps_growth')}>
                        EPS Growth
                        </button></th>
                    <th><button className="button" onClick={() => props.sortBy('growth')}>
                        Revenue Growth
                        </button></th>
                    <th><button className="button" onClick={() => props.sortBy('marketcap')}>
                        Market Capitalization
                        </button></th>
                    <th><button className="button" onClick={() => props.sortBy('ebitda')}>
                        EBITDA
                        </button></th>
                    <th><button className="button" onClick={() => props.sortBy('lt_debt')}>
                        Long Term Debt
                        </button></th>
                    <th><button className="button" onClick={() => props.sortBy('oneyearhigh')}>
                        52 Week High
                        </button></th>
                    <th><button className="button" onClick={() => props.sortBy('price_percent_from_1_yr_hi')}>
                        Price Percent from 52 Week High
                        </button></th>
                    <th><button className="button" onClick={() => props.sortBy('float')}>
                        Float
                        </button></th>
                    <th><button className="button" onClick={() => props.sortBy('insider_own')}>
                        Percent insider Ownership
                        </button></th>
                    <th><button className="button" onClick={() => props.sortBy('percent_institutional_own')}>
                        Percent Institutional Ownership
                        </button></th>
                    <th><button className="button" onClick={() => props.sortBy('volume')}>
                        Volume
                        </button></th>
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
                            <td>{numberWithCommas(row.growth)}%</td>
                            <td>${numberWithCommas(row.marketcap)}</td>
                            <td>${numberWithCommas(row.ebitda)}</td>
                            <td>${numberWithCommas(row.lt_debt)}</td>
                            <td>${row.oneyearhigh}</td>
                            <td>{row.price_percent_from_1_yr_hi}%</td>
                            <td>{numberWithCommas(row.float)}</td>
                            <td>{row.insider_own}%</td>
                            <td>{row.percent_institutions_own}%</td>
                            <td>{numberWithCommas(row.volume)}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}