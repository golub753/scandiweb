import React, { Component } from 'react';
import { PathImg, Icon, OrdersLength } from '../HeaderComponents/HeaderComponents';
import { connect } from 'react-redux';
import { toggleBugStateAction } from '../../../store/bugReducer';

class HeaderBug extends Component {
    constructor(props) {
        super(props)
    }
    render() { 
        const counter = this.props.counter;
        return (
            <PathImg onClick={() => this.props.toggleState()}>
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

const mapDispatchToProps = (dispatch) => {
    return {
      toggleState: () => dispatch(toggleBugStateAction())
    }
  }

const mapStateToProps = (state) => {
    return {
        ...state.orders
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(HeaderBug);