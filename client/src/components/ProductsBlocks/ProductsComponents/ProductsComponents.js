import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 444px;
    grid-column-gap: 40px;
    grid-row-gap: 103px;
`

export const Block = styled.div`
    position: relative;
    background: #FFFFFF;
    transition: .3s;
    :hover {
        box-shadow: ${props => props['data-stock'] ? '0px 4px 35px rgba(168, 172, 176, 0.19)' : 'none'};
        Button {
            opacity: 1;
        }
    }
    ::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #FFFFFF;
        opacity: 0.5;
        display: ${props => props['data-stock'] ? 'none' : 'block'};
        z-index: 1;
    }
    ::before {
        content: 'OUT OF STOCK';
        position: absolute;
        font-weight: 400;
        font-size: 24px;
        line-height: 160%;
        color: #8D8F9A;
        top: 146px;
        left: 50%;
        transform: translateX(-50%);
        display: ${props => props['data-stock'] ? 'none' : 'block'};
        z-index: 2;
    }
`

export const BlockWrapper = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    grid-row-gap: 24px;
`

export const Image = styled.img`
    width: 100%;
    height: 330px;
    object-fit: cover;
`

export const Info = styled.div`
`

export const Name = styled.div`
    font-weight: 300;
    font-size: 18px;
    line-height: 160%;
    color: #1D1F22;
`

export const Price = styled.div`
    font-weight: 500;
    font-size: 18px;
    line-height: 160%;
    color: #1D1F22;
`

export const Button = styled.button`
    width: 52px;
    height: 52px;
    display: ${props => props['data-stock'] ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: none;
    outline: none;
    transition: .3s;
    background: #5ECE7B;
    opacity: 0;
    cursor: pointer;
    position: absolute;
    bottom: 72px;
    right: 31px;
`

export const Cart = styled.img`
    width: 24px;
    height: fit-content;
`