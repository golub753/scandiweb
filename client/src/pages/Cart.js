import { Component } from "react"
import Container from '../containers/Container';
import { Main, Title } from './PagesComponents/PagesComponents';

class Cart extends Component {
    render() {
        return(
            <Main>
                <Container>
                    <Title>
                        Cart
                    </Title>
                </Container>
            </Main>
        )
    }
}

export default Cart;