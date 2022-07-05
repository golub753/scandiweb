import { Component } from "react";
import Container from '../../containers/Container';
import { ProductWrapper, Wrapper, Image, Info, Brand, Name, Title, Cost, Checks, Button, Description } from "./ProductComponents/ProductComponents";
import ProductVarient from "./ProductVarient/ProductVarient";
import { connect } from 'react-redux';
import ProductCost from "./ProductCost/ProductCost";
import { addOrderAction } from "../../store/ordersReducer";

class Product extends Component {
    constructor(props) {
        super(props);
    }
    addOrder(product) {
        this.props.addOrder(product)
    }
    render() {
        const id = window.location.pathname.split('/').pop()
        const product = this.props.allProducts.find(item => item.id === id);
        return (
            <ProductWrapper>
                <Container>
                    <Wrapper>
                        <Image src={product.gallery[0]}/>
                        <Info>
                            <Brand>
                                {product.brand}
                            </Brand>
                            <Name>
                                {product.name}
                            </Name>
                            {product.attributes.map((item, key) => {
                                return (
                                    <div key={key}>
                                    <Title>
                                        {item.name}:
                                    </Title>
                                    <Checks>
                                        {item.items.map((val, id) => {
                                            return (
                                                <ProductVarient index={id} key={id} name={product.name} displayValue={val.displayValue} value={val.value} check={(id === 0) ? true: false} title={item.name}/>
                                            )
                                        })}
                                    </Checks>
                                    </div>
                                )
                            })}
                            <ProductCost product={product}/>
                            <Button onClick={() => this.addOrder({id: product.id, name: product.name, brand: product.brand, photo: product.gallery[0], attributes: product.attributes, prices: product.prices, counter: 1})}>ADD TO CART</Button>
                            <Description>
                                {product.description}
                            </Description>
                        </Info>
                    </Wrapper>
 
                </Container>
            </ProductWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.allProducts,
        ...state.orders
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addOrder: (product) => dispatch(addOrderAction(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);