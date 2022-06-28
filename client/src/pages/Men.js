import { Component } from "react"
import Container from '../containers/Container';
import { Main, Title } from './PagesComponents/PagesComponents';

class Men extends Component {
    render() {
        return(
            <Main>
                <Container>
                    <Title>
                        Men
                    </Title>
                </Container>
            </Main>
        )
    }
}

export default Men;