import React, { Component } from 'react';
import { PathImg, Icon, OrdersLength } from '../HeaderComponents/HeaderComponents';
import { connect } from 'react-redux';
import { toggleBugStateAction, toggleOverlayAction } from '../../../store/bugReducer';

class HeaderBug extends Component {
    constructor(props) {
        super(props)
        this.toggleBug = this.toggleBug.bind(this);
    }
    toggleBug() {
        this.props.toggleState();
        this.props.toggleOverlay();
    }
    render() { 
        const counter = this.props.counter;
        return (
            <PathImg onClick={() => this.toggleBug()}>
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
      toggleState: () => dispatch(toggleBugStateAction()),
      toggleOverlay: () => dispatch(toggleOverlayAction())
    }
  }

const mapStateToProps = (state) => {
    return {
        ...state.orders
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(HeaderBug);