import { Component } from "react"
import Container from '../containers/Container';
import { Main, Title } from './PagesComponents/PagesComponents';
import ProductsBlocks from "../components/ProductsBlocks/ProductsBlocks";

class Tech extends Component {
    render() {
        return(
            <Main>
                <Container>
                    <Title>
                        Tech
                    </Title>
                    <ProductsBlocks products={this.props.products}/>
                </Container>
            </Main>
        )
    }
}

export default Tech;