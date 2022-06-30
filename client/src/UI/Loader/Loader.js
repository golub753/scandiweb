import styled from 'styled-components';
import { Component } from 'react';

const Load = styled.div`
    width: 130px;
    height: 130px;
    border: 4px dashed #5ECE7B;
    border-radius: 50%;
    margin: 100px auto;
    animation: 3s linear 0s normal none infinite running rot;
    @keyframes rot {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    }
    @-webkit-keyframes rot {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
`

class Loader extends Component {
    render() { 
        return (
            <Load/>
            );
    }
}
 
export default Loader;