import styled from "styled-components";

export const Over = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    background: rgba(57, 55, 72, 0.22);
    display: ${props => props.active ? 'block' : 'none'}
`