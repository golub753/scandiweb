import { Component } from "react";
import { Block, Info, Title, Img, Controller, Counter, Contr, Icon, Price } from "./HeaderOrdersComponents/HeaderOrdersComponents";
import { connect } from "react-redux";
import { incrementAction, decrementAction } from "../../../store/ordersReducer";

class HeaderOrder extends Component {
    render() { 
        const item = this.props.item;
        const initialCurrency = this.props.initialCurrency;
        const findCurrency = this.props.item.prices.find(item => item.currency.symbol === initialCurrency.symbol);
        return (
            <Block>
                <Info>
                    <Title>{item.name}</Title>
                    <Title>{item.brand}</Title>
                    <Price>
                        {initialCurrency.symbol}{findCurrency.amount * item.counter}
                    </Price>
                </Info>
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
                <Img src={item.photo} alt={item.name}/>
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
 
export default connect(mapStateToProps, mapDispatchToProps)(HeaderOrder);