import { Component } from "react"
import Container from '../containers/Container';
import { Main, Title } from './PagesComponents/PagesComponents';
import Orders from "../components/Order/Orders";

class Cart extends Component {
    render() {
        return(
            <Main>
                <Container>
                    <Title>
                        Cart
                    </Title>
                    <Orders/>
                </Container>
            </Main>
        )
    }
}

export default Cart