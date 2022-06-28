import styled from 'styled-components';
import { Component } from 'react';

const Wrapper = styled.div`
    max-width: 1238px;
    padding: 0 15px;
    margin: 0 auto;
`

class Container extends Component {
    constructor(props) {
        super(props);
        this.children = this.props.children;
    }
    render() {
        return(
            <Wrapper>
                {this.children}
            </Wrapper>
        )
    }
}

export default Container;