import styled from 'styled-components';
import { NavLink as Link } from "react-router-dom";

export const Wrapper = styled.div`
    background: #FFFFFF;
    padding: 24px 0 0;
`

export const FlexBlock = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`

export const Ul = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Nav = styled.nav`
`

export const Li = styled.li`
    height: 56px;
`

export const Path = styled(Link)`
    padding: 0 16px;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    text-transform: uppercase;
    color: #1D1F22;
    text-decoration: none;
    height: 100%;
    display: block;
    position: relative;
    transition: .3s;
    ::after {
        position: absolute;
        content: '';
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 2px;
        background: transparent;
        transition: .3s;
    }
    :hover {
        font-weight: 600;
        color: #5ECE7B;
        ::after {
            background: #5ECE7B;
        }
    }
`

export const PathImg = styled(Link)`
    text-decoration: none;
    position: relative;
`

export const OrdersLength = styled.div`
        position: absolute;
        width: 15px;
        height: 15px;
        top: -11px;
        right: -12px;
        background: #1D1F22;
        border-radius: 60px;
        font-family: 'Roboto';
        font-weight: 700;
        padding: 3px;
        font-size: 14px;
        line-height: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        color: #FFFFFF;
`

export const Img = styled.img`
    width: 41px;
    height: fit-content;
` 

export const Icon = styled.img`
    width: 20px;
    height: fit-content;
`

export const Actions = styled.div`
    width: 204px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    grid-column-gap: 22px;
`

export const CurrencyBlock = styled.div`
    cursor: pointer;
    position: relative;
`

export const CurrencyTrigger = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    grid-column-gap: 10px;
`

export const Currency = styled.div`
    font-weight: 500;
    font-size: 18px;
    line-height: 160%;
    color: #1D1F22;
    margin-bottom: 3px;
`

export const Arrow = styled.img`
    width: 9px;
    height: fit-content;
    transition: .3s;
    transform: ${props => props['isOpen'] ? 'rotate(180deg)' : ''}
`

export const Currencies = styled.div`
    position: absolute;
    top: 100%;
    left: -20px;
    width: fit-content;
    z-index: 20;
    display: ${props => props['isOpen'] ? 'block' : 'none'}
`

export const CurrenciesBlock = styled.div`
    background: #FFFFFF;
    transition: .3s;
    :hover {
        background: #EEEEEE;
    }
`

export const CurrenciesBlockWrapper = styled.div`
    padding: 8px 38px 8px 20px;
    display: flex;
    align-items: center;
    grid-column-gap: 5px;
`

export const CurrenciesText = styled.div`
    font-weight: 500;
    font-size: 18px;
    line-height: 160%;
    color: #1D1F22;
`