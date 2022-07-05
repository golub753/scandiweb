import { Component } from "react";
import {Block, OrderInfo, Name, Brand} from './OrderComponents/OrderComponents';

class Order extends Component {
    render() { 
        return (
            <Block>
                <OrderInfo>
                    <Brand>
                        {this.props.item.brand}
                    </Brand>
                    <Name>
                        {this.props.item.name}
                    </Name>
                </OrderInfo>
            </Block>
        );
    }
}
 
export default Order;