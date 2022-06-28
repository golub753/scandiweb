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