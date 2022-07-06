import React, { Component } from 'react';
import { PathImg, Icon, OrdersLength } from '../HeaderComponents/HeaderComponents';
import { connect } from 'react-redux';

class HeaderBug extends Component {
    render() { 
        const counter = JSON.parse(localStorage.getItem('state')).counter;
        return (
            <PathImg to="/cart">
                <Icon src='../images/icons/bug.svg' alt='bug'/>
                {(counter) ? 
                <OrdersLength>
                    {counter}
                </OrdersLength>
                : false}
            </PathImg>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        ...state.orders
    }
}
 
export default connect(mapStateToProps)(HeaderBug);