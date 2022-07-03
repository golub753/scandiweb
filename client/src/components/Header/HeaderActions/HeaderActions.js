import { Component } from "react";
import { Actions, CurrencyBlock, CurrencyTrigger, Currency, Arrow, Currencies, CurrenciesBlock, CurrenciesBlockWrapper, CurrenciesText } from "../HeaderComponents/HeaderComponents";
import HeaderBug from '../HeaderBug/HeaderBug';
import { connect } from "react-redux";
import { changeInitialCurrencyAction } from '../../../store/initialCurrencyReducer';

class HeaderActions extends Component {
    constructor(props) {
        super(props)
        this.openCurrencies = this.openCurrencies.bind(this);
        this.changeInitialCurrencies = this.changeInitialCurrencies.bind(this);
        this.state = {
            open: false
        }
    }
    openCurrencies() {
        (this.state.open) ? this.setState({open: false}) : this.setState({open: true});
    }
    changeInitialCurrencies(symbol) {
        const newInitialCurrencies = this.props.currency.currencies.find((item) => item.symbol === symbol)
        this.props.changeCurrency(newInitialCurrencies);
        (this.state.open) ? this.setState({open: false}) : this.setState({open: true});
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
                        <Arrow src="./images/icons/arrow.svg" alt="arrow" isOpen={this.state.open}/>
                    </CurrencyTrigger>
                    <Currencies isOpen={this.state.open}>
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
            </Actions>
        )
    }
} 


const mapStateToProps = (state) => { 
    return {
        ...state.currency,
        ...state.initialCurrency
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrency: (currency) => dispatch(changeInitialCurrencyAction(currency))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderActions);