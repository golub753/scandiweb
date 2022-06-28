import { Component } from "react"
import Container from '../containers/Container';
import { Main, Title } from './PagesComponents/PagesComponents';

class Home extends Component {
    render() {
        return(
            <Main>
                <Container>
                    <Title>
                        Home
                    </Title>
                </Container>
            </Main>
        )
    }
}

export default Home;