import { Component } from "react";
import { Blocks, End, Row, Text, Num, Button } from "./OrderComponents/OrderComponents";
import { connect } from "react-redux";
import Order from "./Order";

class Orders extends Component {
    render() { 
        const initialCurrency = this.props.initialCurrency;
        const prices = this.props.orders.orders.map(item => item.prices);
        const initialPrice = prices.map(item => item.find(price => price.currency.symbol === initialCurrency.symbol));
        const total = initialPrice.reduce((sum, item) => sum + item.amount, 0);
        return (
            <>
                {(this.props.orders.orders.length > 0) ?
                    <>
                        <Blocks>
                        {this.props.orders.orders.map((item, id) => {
                            return(
                                <Order
                                    key={id}
                                    item={item}
                                />
                            )
                        })}
                        </Blocks>
                        <End>
                            <Row>
                            {/* I don't know what that percentage is, sorry */}
                                <Text>Tax 21%:</Text>
                                <Num>{initialCurrency.symbol}42.00</Num>
                            </Row>
                            <Row>
                                <Text>Quantity:</Text>
                                <Num>{this.props.orders.counter}</Num>
                            </Row>
                            <Row>
                                <Text>Total:</Text>
                                <Num>{initialCurrency.symbol}{(total).toFixed(2)}</Num>
                            </Row>
                        </End>
                        <Button>ORDER</Button>
                    </>
                    : <p>No orders, please, choose product in catalog.</p>
                }
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.orders,
        ...state.initialCurrency
    }
}
 
export default connect(mapStateToProps)(Orders);