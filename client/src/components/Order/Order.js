import { Component } from "react";
import {Block, Wrapper, OrderInfo, Name, Brand, Price, Preview, Img, Controller, Counter, Contr, Icon, Title, Attributes} from './OrderComponents/OrderComponents';
import { connect } from "react-redux";
import { incrementAction, decrementAction } from "../../store/ordersReducer";
import OrderVarient from "./OrderVarient/OrderVarient";
import Slider from "../Slider/Slider";

class Order extends Component {
    constructor(props){
        super(props)
    }
    render() { 
        const item = this.props.item;
        const initialCurrency = this.props.initialCurrency;
        const findCurrency = this.props.item.prices.find(item => item.currency.symbol === initialCurrency.symbol);
        return (
            <Block>
                <Wrapper>
                    <OrderInfo>
                        <Brand>
                            {item.brand}
                        </Brand>
                        <Name>
                            {item.name}
                        </Name>
                        <Price>
                            {initialCurrency.symbol}{findCurrency.amount * item.counter}
                        </Price>
                        {item.attributes.map((item, index) => {
                            return (
                                <div key={index}>
                                    <Title>
                                        {item.name}:
                                    </Title>
                                    <Attributes>
                                        {item.items.map((attr, id) => {
                                            return (
                                                <OrderVarient
                                                    name={item.name}
                                                    attributes={this.props.item.attributes}
                                                    item={attr}
                                                    checkedAttributes={this.props.item.checkedAttributes}
                                                    id={index}
                                                    key={id}
                                                />
                                            )
                                        })}
                                    </Attributes>
                                </div>
                            )
                        })}
                    </OrderInfo>
                    <Preview>
                        <Controller>
                            <Contr onClick={() => this.props.increment(item)}>
                                <Icon src="../images/icons/increment.svg" alt="increment"/>
                            </Contr>
                            <Counter>
                                {item.counter}
                            </Counter>
                            <Contr onClick={() => this.props.decrement(item)}>
                                <Icon src="../images/icons/decrement.svg" alt="decrement"/>
                            </Contr>
                        </Controller>
                        {(item.images.length > 1) ? 
                            <Slider items={item.images}/>
                            : 
                            <Img src={item.photo} alt={item.name}/>
                        }
                    </Preview>
                </Wrapper>
            </Block>
        );
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
      increment: (item) => dispatch(incrementAction(item)),
      decrement: (item) => dispatch(decrementAction(item))
    }
  }

const mapStateToProps = (state) => { 
    return {
        ...state.initialCurrency,
        ...state.orders
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Order);