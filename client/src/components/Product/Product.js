import { Component } from "react";
import Container from '../../containers/Container';
import { ProductWrapper, Wrapper, Image, Info, Brand, Name, Title, Cost } from "./ProductComponents/ProductComponents";
import { connect } from 'react-redux';

class Product extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const product = this.props.product;
        const initialCurrency = this.props.initialCurrency;
        const findCurrency = product.prices.find(item => item.currency.label === initialCurrency.label);
        return (
            <ProductWrapper>
                <Container>
                {(product) ? 
                    <Wrapper>
                        <Image src={product.gallery[0]}/>
                        <Info>
                            <Brand>
                                {product.brand}
                            </Brand>
                            <Name>
                                {product.name}
                            </Name>
                            <Title>
                                Price:
                            </Title>
                            <Cost>
                            {this.props.initialCurrency.symbol}{(findCurrency) ? findCurrency.amount : false}
                            </Cost>
                        </Info>
                    </Wrapper>
                : "false"}
                </Container>
            </ProductWrapper>
        );
    }
}

const mapStateToProps = (state) => ({ 
    ...state.allProducts,
    ...state.initialCurrency
  })

export default connect(mapStateToProps)(Product);