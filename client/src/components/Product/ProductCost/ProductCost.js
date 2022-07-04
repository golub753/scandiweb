import { Component } from "react";
import { Title, Cost } from "../ProductComponents/ProductComponents";
import { connect } from "react-redux";

class ProductCost extends Component {
    render() { 
        const findCurrency = this.props.product.prices.find(item => item.currency.label === this.props.initialCurrency.label);
        return (
            <>
                <Title>
                    Price:
                </Title>
                <Cost>
                    {this.props.initialCurrency.symbol}{findCurrency.amount}
                </Cost>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.initialCurrency
    }
}
 
export default connect(mapStateToProps)(ProductCost);