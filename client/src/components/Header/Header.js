import { Component } from 'react';
import { Wrapper, FlexBlock } from './HeaderComponents/HeaderComponents';
import Container from '../../containers/Container';
import HeaderLinks from './HeaderLinks/HeaderLinks';
import HeaderHome from './HeaderHome/HeaderHome';
import HeaderActions from './HeaderActions/HeaderActions';

class Header extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <Wrapper>
                <Container>
                    <FlexBlock>
                        <HeaderLinks/>
                        <HeaderHome/>
                        <HeaderActions/>
                    </FlexBlock>
                </Container>
            </Wrapper>
        )
    }
}
export default Header;