import Layout from '../../components/Layout'
import React, { Component } from 'react';


class apiDB extends Component {

    
    //constructor(props: any) {
    constructor() {
        super(props);
        this.state = {
            title: 'apiDb application',
            stocks: []
        }

    }
    //Make AJAX calls
    componentDidMount() {
        let that = this;
        console.log('Component has Mounted')
        fetch('http://localhost:5000/api/pullfromDBstocks')
            .then(function(response) {
                response.json()
                    .then(function(data) {
                        that.setState( {
                            stocks: data
                        })
                    })
            })
    }
   // removeStocks(id:any)  {
  
    removeStocks()  {
        
        var that = this;
        //this is using stocks from let stocks = this.state.stocks in render()
        let stocks = that.state.stocks;
        let stock3 = stocks.find(function(stock3) {
            
            //by matching them we match the id in which to delete on the button click
            return stock3.id === id
        });
        var request = new Request('http://localhost:5000/api/removeStock/'+ id, {
            method: 'DELETE'
        });
        fetch(request)
            .then(function(response) {
                stocks.splice(stocks.indexOf(stock3), 1);
                that.setState({
                    stocks: stocks
                })
                response.json()
                    .then(function(data) {
                        console.log(that)
                    })
            })
    }

   
    addStock() {
        
        var that = this;
        event.preventDefault();
        console.log('in method')
       
        let stock_data = {
            
           // id: this.refs.id.value,
            symbol: this.refs.symbol.value,
            name: this.refs.name.value,
            price: this.refs.price.value,
            marketcap: this.refs.marketcap.value,
            debt: this.refs.debt.value,
            growth: this.refs.growth.value
        };
        var request = new Request('http://localhost:5000/api/newStock', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(stock_data)
        });

        let stocks = that.state.stocks;
        stocks.push(stock_data)
        //stocks.concat(stock_data);
        that.setState({
            stocks: stocks
        })
        //xmlhttprequest()
        fetch(request)
            .then(function (response) {
                response.json()
                    .then(function (data) {
                    })
            })
            .catch(function (err) {
                console.log(err)
            })
    }

    render() {
        let title = this.state.title;
        let stocks = this.state.stocks
        return (
            <div className="apiDB">
                <h1>{title}</h1>
                <form ref="stockForm">
                    
                    <input type="text" ref="symbol" placeholder="symbol" />
                    <input type="text" ref="name" placeholder="name" />
                    <input type="text" ref="price" placeholder="price" />
                    <input type="text" ref="marketcap" placeholder="marketcap" />
                    <input type="text" ref="debt" placeholder="debt" />
                    <input type="text" ref="growth" placeholder="growth" />
                    <button onClick={this.addStock.bind(this)}> Add Stock</button>
                </form>
                <ul>
                    {stocks.map(indStocks => <li key={indStocks.id}>{indStocks.symbol} {indStocks.name} {indStocks.price} {indStocks.marketcap} {indStocks.debt}{indStocks.growth} <button onClick= {this.removeStocks.bind(this, indStocks.id)}>Remove</button></li>)}
                   
                </ul>
            </div>
        )
    }
}

export default apiDB;