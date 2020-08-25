class Prices extends React.Component {
    state = {
        currency: 'USD'
    }

    render() {

        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item">
                        Apple stock price in URL is $:
                      <span className="badge badge-primary"> {this.props.stockapi.c} </span>
                      <strong>$</strong>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Prices;