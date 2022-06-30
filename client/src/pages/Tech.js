import { Component } from "react"
import Container from '../containers/Container';
import { Main, Title } from './PagesComponents/PagesComponents';

class Tech extends Component {
    render() {
        return(
            <Main>
                <Container>
                    <Title>
                        Tech
                    </Title>
                </Container>
            </Main>
        )
    }
}

export default Tech;