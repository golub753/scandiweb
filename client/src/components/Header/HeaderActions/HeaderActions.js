import { Component } from "react";
import { Actions, CurrencyBlock, Currency, Arrow } from "../HeaderComponents/HeaderComponents";
import HeaderBug from '../HeaderBug/HeaderBug';
import { connect } from "react-redux";

class HeaderActions extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const currency = this.props.currency.currencies;
        return (
            <Actions>
                <CurrencyBlock>
                    <Currency>
                        $
                    </Currency>
                    <Arrow src="./images/icons/arrow.svg" alt="arrow"/>
                </CurrencyBlock>
                <HeaderBug/>
            </Actions>
        )
    }
} 


const mapStateToProps = (state) => { 
    return {
        ...state.currency
    }
}


export default connect(mapStateToProps)(HeaderActions);