import { Component } from "react";
import { Block, BlockWrapper ,Image, Info, Name, Price, Button, Cart } from '../ProductsComponents/ProductsComponents';
import { connect } from "react-redux";
import { addOrderAction } from '../../../store/ordersReducer';

class ProductsBlock extends Component {
    constructor(props) {
        super(props)
        this.getItem = this.getItem.bind(this);
        this.state = {
            product: {
                id: this.props.id,
                name: this.props.name,
                brand: this.props.brand,
                photo: this.props.mainImage,
                attributes: this.props.item.attributes,
                prices: this.props.prices,
                counter: 1,
                images: this.props.item.gallery,
                checkedAttributes: []
            }
        }
    }
    getItem(e, item) {
        e.preventDefault();
        this.props.addOrder(item)
    }
    render() {
        const initialCurrency = this.props.initialCurrency;
        const findCurrency = this.props.prices.find(item => item.currency.symbol === initialCurrency.symbol);
        return (
            <Block data-stock={this.props.inStock} to={`/product/${this.props.id}`}>
                <BlockWrapper>
                    <Image src={this.props.mainImage} alt={this.props.name}/>
                    <Info>
                        <Name>
                            {this.props.name}
                        </Name>
                        <Price>
                            {initialCurrency.symbol}{(findCurrency) ? +(findCurrency.amount).toFixed(2) : false}
                        </Price>
                    </Info>
                    <Button data-stock={this.props.inStock} onClick={(e) => this.getItem(e, this.state.product)}>
                        <Cart src="./images/icons/cart.svg" alt="cart"/>
                    </Button>
                </BlockWrapper>
            </Block>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addOrder: (product) => dispatch(addOrderAction(product))
    }
}

const mapStateToProps = (state) => { 
    return {
        ...state.initialCurrency
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(ProductsBlock);