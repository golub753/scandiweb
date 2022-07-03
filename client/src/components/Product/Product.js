import { Component } from "react";
import Container from '../../containers/Container';
import { ProductWrapper } from "./ProductComponents/ProductComponents";

class Product extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <ProductWrapper>
                <Container>
                    hello
                </Container>
            </ProductWrapper>
        );
    }
}
 
export default Product;