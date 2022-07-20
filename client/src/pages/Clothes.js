import { Component } from "react"
import Container from '../containers/Container';
import { Main, Title } from './PagesComponents/PagesComponents';
import ProductsBlocks from "../components/ProductsBlocks/ProductsBlocks";

class Clothes extends Component {
    render() {
        const category = this.props.category;
        return(
            <Main>
                <Container>
                    <Title>
                        Clothes
                    </Title>
                    <ProductsBlocks category={category} getProduct={this.props.getProduct}/>
                </Container>
            </Main>
        )
    }
}

export default Clothes;