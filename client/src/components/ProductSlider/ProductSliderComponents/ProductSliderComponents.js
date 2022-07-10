import styled from "styled-components";

export const Slider = styled.div`
    width: 100%;
    position: relative;
    overflow: hidden;
    height: 440px;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-row-gap: 40px;
    transition: all 1s ease-out;
`

export const Slide = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
`