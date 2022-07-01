import { Component } from "react";
import { Actions, CurrencyBlock, Currency, Arrow } from "../HeaderComponents/HeaderComponents";
import HeaderBug from '../HeaderBug/HeaderBug';

class HeaderActions extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Actions>
                <CurrencyBlock>
                    <Currency>$</Currency>
                    <Arrow src="./images/icons/arrow.svg" alt="arrow"/>
                </CurrencyBlock>
                <HeaderBug/>
            </Actions>
        )
    }
} 

export default HeaderActions;