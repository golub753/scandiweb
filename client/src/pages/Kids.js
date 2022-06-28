import { Component } from "react"
import Container from '../containers/Container';
import { Main, Title } from './PagesComponents/PagesComponents';

class Kids extends Component {
    render() {
        return(
            <Main>
                <Container>
                    <Title>
                        Kids
                    </Title>
                </Container>
            </Main>
        )
    }
}

export default Kids;