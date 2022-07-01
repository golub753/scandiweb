import { Component } from "react"
import Container from '../containers/Container';
import { Main, Title } from './PagesComponents/PagesComponents';
import ProductsBlocks from "../components/ProductsBlocks/ProductsBlocks";

class Clothes extends Component {
    render() {
        return(
            <Main>
                <Container>
                    <Title>
                        Clothes
                    </Title>
                    <ProductsBlocks products={this.props.products}/>
                </Container>
            </Main>
        )
    }
}

export default Clothes;