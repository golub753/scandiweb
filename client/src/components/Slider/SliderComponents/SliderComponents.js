import styled from 'styled-components';

export const Main = styled.div`
    width: 100%;
    height: 288px;
    position: relative;
    overflow: hidden;
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    transition: all 1s ease-out;
    height: 100%;
`

export const Prev = styled.div`
    position: absolute;
    bottom: 16px;
    right: 48px;
    width: 24px;
    height: 24px;
    background: rgba(0, 0, 0, 0.73);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
export const Next = styled.div`
    width: 24px;
    height: 24px;
    background: rgba(0, 0, 0, 0.73);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    bottom: 16px;
    right: 16px;
`

export const Arrow = styled.img`
`

export const ArrowPrev = styled.img`
    transform: rotate(180deg)
`

export const MainSlide = styled.img`
    width: 200px;
    height: fit-content;
    object-fit: contain;
`