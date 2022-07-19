import { Component } from "react";
import { connect } from "react-redux";
import { Main, Wrapper, Buttons, View, Check, MyBag, Items, Orders, Total } from "./HeaderOrdersComponents/HeaderOrdersComponents";
import HeaderOrder from "./HeaderOrder";
import { toggleBugStateAction, toggleOverlayAction } from '../../../store/bugReducer';

class HeaderOrders extends Component {
    constructor(props) {
        super(props)
    
        this.toggleBug = this.toggleBug.bind(this);
    }
    toggleBug() {
        this.props.toggleState();
        this.props.toggleOverlay();
    }
    render() { 
        const orders = this.props.orders.orders;
        const initialCurrency = this.props.initialCurrency;
        const total = orders.reduce((sum, item) => sum += item.prices[0].amount,0);
        return (
            <Main active={this.props.bug}>
                <Wrapper>
                    {(orders.length > 0) ? 
                    <>
                        <MyBag>
                        My Bag,
                            <Items>
                            {orders.length} {(orders.length === 1) ? 'item' : 'items'}
                            </Items>
                        </MyBag>
                        <Orders>
                            {orders.map((item, id) => {
                                return (
                                    <HeaderOrder
                                        key={id}
                                        item={item}
                                    />
                                )
                            })}
                        </Orders>
                        <Total>
                            Total
                            <div>
                                {initialCurrency.symbol}{+(total).toFixed(2)}
                            </div>
                        </Total>
                    </>
                    : <p>No orders, please, choose product in catalog.</p>
                    }
                    <Buttons>
                        <View to='/cart' onClick={() => this.toggleBug()}>View bag</View>
                        <Check onClick={() => this.toggleBug()}>CHECK OUT</Check>
                    </Buttons>
                </Wrapper>
            </Main>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      toggleState: () => dispatch(toggleBugStateAction()),
      toggleOverlay: () => dispatch(toggleOverlayAction())
    }
  }

const mapStateToProps = (state) => {
    return {
        ...state.initialCurrency,
        ...state.bug,
        orders: state.orders
    }
}
 
 
export default connect(mapStateToProps, mapDispatchToProps)(HeaderOrders);