import { Component } from "react";
import Container from '../../containers/Container';
import { ProductWrapper, Wrapper, Image, Info, Brand, Name, Title, Cost, Checks, Button, Description } from "./ProductComponents/ProductComponents";
import ProductVarient from "./ProductVarient/ProductVarient";
import { connect } from 'react-redux';

class Product extends Component {
    constructor(props) {
        super(props);
        this.product = this.props.product;
    }
    render() {
        const initialCurrency = this.props.initialCurrency
        const findCurrency = this.product.prices.find(item => item.currency.label === initialCurrency.label)
        console.log(this.product);
        return (
            <ProductWrapper>
                <Container>

                    <Wrapper>
                        <Image src={this.product.gallery[0]}/>
                        <Info>
                            <Brand>
                                {this.product.brand}
                            </Brand>
                            <Name>
                                {this.product.name}
                            </Name>
                            {this.product.attributes.map((item, id) => {
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
                            <Title>
                                Price:
                            </Title>
                            <Cost>
                            {initialCurrency.symbol}{findCurrency.amount}
                            </Cost>
                            <Button>ADD TO CART</Button>
                            <Description>
                                {this.product.description}
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
        ...state.initialCurrency  
    }
}

export default connect(mapStateToProps)(Product);