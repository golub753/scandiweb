import { Component } from "react"
import Container from '../containers/Container';
import { Main, Title } from './PagesComponents/PagesComponents';

class Clothes extends Component {
    render() {
        return(
            <Main>
                <Container>
                    <Title>
                        Clothes
                    </Title>
                </Container>
            </Main>
        )
    }
}

export default Clothes;