import { Component } from "react"
import Container from '../containers/Container';
import { Main, Title } from './PagesComponents/PagesComponents';
import ProductsBlocks from "../components/ProductsBlocks/ProductsBlocks";

class Tech extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const category = this.props.category;
        return(
            <Main>
                <Container>
                    <Title>
                        Tech
                    </Title>
                    <ProductsBlocks category={category}/>
                </Container>
            </Main>
        )
    }
}

export default Tech;