import { Component } from "react";
import { Actions, CurrencyBlock, CurrencyTrigger, Currency, Arrow, Currencies, CurrenciesBlock, CurrenciesBlockWrapper, CurrenciesText } from "../HeaderComponents/HeaderComponents";
import HeaderBug from '../HeaderBug/HeaderBug';
import HeaderOrders from "../HeaderOrders/HeaderOrders";
import { connect } from "react-redux";
import { changeInitialCurrencyAction } from '../../../store/initialCurrencyReducer';
import { toggleCurrencyStateAction, toggleOverlayAction } from "../../../store/bugReducer";

class HeaderActions extends Component {
    constructor(props) {
        super(props)
        this.openCurrencies = this.openCurrencies.bind(this);
        this.changeInitialCurrencies = this.changeInitialCurrencies.bind(this);
    }
    openCurrencies() {
        this.props.toggleState();
        this.props.toggleOverlay();
    }
    changeInitialCurrencies(symbol) {
        const newInitialCurrencies = this.props.currency.currencies.find((item) => item.symbol === symbol)
        this.props.changeCurrency(newInitialCurrencies);
        this.props.toggleState();
        this.props.toggleOverlay();
    }
    render() {
        const currency = this.props.currency;
        const initialCurrency = this.props.initialCurrency;
        return (
            <Actions>
                <CurrencyBlock>
                    <CurrencyTrigger onClick={() => this.openCurrencies()}>
                        <Currency>
                            {(initialCurrency) ? initialCurrency.symbol : false}
                        </Currency>
                        <Arrow src="../images/icons/arrow.svg" alt="arrow" isOpen={this.props.toggler}/>
                    </CurrencyTrigger>
                    <Currencies isOpen={this.props.toggler}>
                        {(currency.currencies) ? currency.currencies.map((item, id) => {
                            return (
                                <CurrenciesBlock key={id} onClick={() => this.changeInitialCurrencies(item.symbol)}>
                                    <CurrenciesBlockWrapper>
                                        <CurrenciesText>
                                            {item.symbol}
                                        </CurrenciesText>
                                        <CurrenciesText>
                                            {item.label}
                                        </CurrenciesText>
                                    </CurrenciesBlockWrapper>
                                </CurrenciesBlock>
                            )
                        }) : false}
                    </Currencies>
                </CurrencyBlock>
                <HeaderBug/>
                <HeaderOrders/>
            </Actions>
        )
    }
} 


const mapStateToProps = (state) => { 
    return {
        ...state.currency,
        ...state.initialCurrency,
        ...state.bug,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrency: (currency) => dispatch(changeInitialCurrencyAction(currency)),
        toggleState: () => dispatch(toggleCurrencyStateAction()),
        toggleOverlay: () => dispatch(toggleOverlayAction())
    }
}
 

export default connect(mapStateToProps, mapDispatchToProps)(HeaderActions);