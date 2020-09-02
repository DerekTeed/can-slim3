import React, { Component } from 'react';

class Pagination extends React.Component {
    

    render() {

        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item">
                        Apple stock price in URL is $:
                        <span className="badge badge-primary"> {this.props.stockSymbol} </span>
                      <span className="badge badge-primary"> {this.props.URLNameData} </span>
                      <span className="badge badge-primary"> {this.props.URLStockPriceData} </span>
                      <span className="badge badge-primary"> {this.props.URLMarketCapitalizationData} </span>
                      <span className="badge badge-primary"> {this.props.debtRatio} </span>
                      <span className="badge badge-primary"> {this.props.qtrGrowthYOYData} </span>
                      <strong>$</strong>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Pagination;