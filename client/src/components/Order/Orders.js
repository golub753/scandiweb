import { Component } from "react";
import { Blocks } from "./OrderComponents/OrderComponents";
import { connect } from "react-redux";
import Order from "./Order";

class Orders extends Component {
    render() { 
        console.log(this.props);
        return (
            <>
                {(this.props.orders.orders.length > 0) ?
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
                    : <p>No orders, please, choose product in catalog.</p>
                }
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.orders
    }
}
 
export default connect(mapStateToProps)(Orders);