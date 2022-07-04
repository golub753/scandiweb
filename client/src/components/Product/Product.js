import { Component } from "react";
import Container from '../../containers/Container';
import { ProductWrapper, Wrapper, Image, Info, Brand, Name, Title, Cost, Checks, Button, Description } from "./ProductComponents/ProductComponents";
import ProductVarient from "./ProductVarient/ProductVarient";
import { connect } from 'react-redux';
import ProductCost from "./ProductCost/ProductCost";

class Product extends Component {
    constructor(props) {
        super(props);
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
                            {product.attributes.map((item, id) => {
                                return (
                                    <div key={id}>
                                    <Title>
                                        {item.name}:
                                    </Title>
                                    <Checks>
                                        {item.items.map((item, id) => {
                                            return (
                                                <ProductVarient isAction={(id === 0) ? true : false} key={id} displayValue={item.displayValue} value={item.value}/>
                                            )
                                        })}
                                    </Checks>
                                    </div>
                                )
                            })}
                            <ProductCost product={product}/>
                            <Button>ADD TO CART</Button>
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
        ...state.initialCurrency,
        ...state.allProducts
    }
}

export default connect(mapStateToProps)(Product);