import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Main = styled.div`
    display: ${props => props.active ? 'block' : 'none'};
    width: 340px;
    height: fit-content;
    background: #FFFFFF;
    position: absolute;
    top: 100%;
    right: -31px;
    z-index: 22;
` 

export const Wrapper = styled.div`
    padding: 32px 16px;
`

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const View = styled(Link)`
    width: 140px;
    height: 43px;
    background: #FFFFFF;
    border: 1px solid #1D1F22;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    line-height: 120%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    color: #1D1F22;
    text-decoration: none;
    transition: .3s;
    :hover {
        background: #5ECE7B;
        color: #FFFFFF;
        border: 1px solid #5ECE7B;
    }
`

export const Check = styled.button`
    width: 140px;
    height: 43px;
    background: #FFFFFF;
    border: 1px solid #1D1F22;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    line-height: 120%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    color: #1D1F22;
    text-decoration: none;
    transition: .3s;
    :hover {
        background: #5ECE7B;
        color: #FFFFFF;
        border: 1px solid #5ECE7B;
    }
`

export const MyBag = styled.div`
    font-weight: 700;
    font-size: 16px;
    line-height: 160%;
    color: #1D1F22;
    display: flex;
    align-items: center;
    grid-column-gap: 5px;
    margin-bottom: 32px;
`

export const Items = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    color: #1D1F22;
`

export const Orders = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 40px;
    margin-bottom: 32px;
`

export const Block = styled.div`
    display: grid;
    grid-template-columns: 1.1fr 24px 1fr;
    grid-column-gap: 8px;
    align-items: flex-start;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    grid-row-gap: 8px;
`

export const Title = styled.div`
    font-weight: 300;
    font-size: 16px;
    line-height: 160%;
    color: #1D1F22;
`

export const Img = styled.img`
    width: 115px;
    object-fit: contain;
`

export const Controller = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
`

export const Counter = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    color: #1D1F22;
`

export const Contr = styled.button`
    width: 24px;
    height: 24px;
    border: 1px solid #1D1F22;
    outline: none;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const Icon = styled.img`
    width: 8px;
    height: 8px;
`

export const Price = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    color: #1D1F22;
    display: flex;
    align-items: center;
`

export const Total = styled.div`
    font-family: 'Roboto';
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    line-height: 18px;
    color: #1D1F22;
    margin-bottom: 32px;
`

export const Subtitle = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #1D1F22;
    margin-bottom: 8px;
`

export const CheckBug = styled.div`
    width: fit-content;
    padding: 0 5px;
    height: 24px;
    background: ${props => props.checked ? '#1D1F22' : '#FFFFFF'};
    border: 1px solid #1D1F22;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    color: #1D1F22;
    color: ${props => props.checked ? '#FFFFFF' : '#1D1F22'};
`

export const CheckBugColor = styled.div`
    width: 16px;
    height: 16px;
    background: ${props => props.bg};
    position: relative;
    ::after {
        display: ${props => props.checked ? 'block' : 'none'};
        position: absolute;
        content: '';
        width: 20px;
        height: 20px;
        top: -3px;
        right: -2px;
        left: -3px;
        bottom: -2px;
        border: 1px solid #5ECE7B;
        transition: .3s;
    }
`

export const Checks = styled.div`
    display: flex;
    align-items: center;
    grid-column-gap: 8px;
`