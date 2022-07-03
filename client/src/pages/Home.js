import { Component } from "react"
import Container from '../containers/Container';
import ProductsBlocks from "../components/ProductsBlocks/ProductsBlocks";
import { Main, Title } from './PagesComponents/PagesComponents';

class Home extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const category = this.props.category;
        return(
            <Main>
                <Container>
                    <Title>
                        Home
                    </Title>
                    <ProductsBlocks category={category} getProduct={this.props.getProduct}/>
                </Container>
            </Main>
        )
    }
}

export default Home;