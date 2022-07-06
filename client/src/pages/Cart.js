import { Component } from "react"
import Container from '../containers/Container';
import { Main, Title, Orders } from './PagesComponents/PagesComponents';
import Order from "../components/Order/Order";
import { connect } from "react-redux";

class Cart extends Component {
    render() {
        const orders = this.props.orders.orders;
        const counter = this.props.orders.counter > 0;
        return(
            <Main>
                <Container>
                    <Title>
                        Cart
                    </Title>
                    {counter ? 
                    <Orders>
                        {orders.map((item, id) => {
                            return (
                                <Order 
                                    key={id}
                                    item={item}
                                />
                            )
                        })}
                    </Orders>
                    : 
                    <p>No orders, please, choose product in catalog.</p>
                    }
                </Container>
            </Main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.orders
    }
}

export default connect(mapStateToProps)(Cart);