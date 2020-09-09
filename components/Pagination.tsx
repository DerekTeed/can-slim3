import React, { Component } from 'react';

interface Pagin {
    stockSymbol: string,
    URLNameData: string,
    URLStockPriceData: number,
    URLMarketCapitalizationData: number,
    debtRatio: number,
    qtrGrowthYOYData: number,
    stocks:any
  }

class Pagination extends React.Component<Pagin> {
    

    render() {

        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item">
                        The Market Capitalization of Apple stock is is $:
                      <span className="badge badge-primary"> {this.props.URLMarketCapitalizationData} </span>
                     
                    </li>
                </ul>
            </div>
        );
    }
}

export default Pagination;