import styled from "styled-components";

export const ProductWrapper = styled.div`
    padding: 80px 0;
`

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 729px 1fr;
    grid-column-gap: 100px;
`

export const Image = styled.img`
    width: 610px;
    height: 511px;
    object-fit: cover;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
`

export const Brand = styled.div`
    font-weight: 600;
    font-size: 30px;
    line-height: 27px;
    color: #1D1F22;
    margin-bottom: 16px;
`

export const Name = styled.div`
    font-weight: 400;
    font-size: 30px;
    line-height: 27px;
    color: #1D1F22;
    margin-bottom: 43px;
`

export const Title = styled.div`
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    color: #1D1F22;
    margin-bottom: 10px;
    text-transform: uppercase;
`

export const Cost = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 24px;
    line-height: 18px;
    color: #1D1F22;
    margin-bottom: 20px;
`

export const Check = styled.div`
`

export const Label = styled.label`
    width: 63px;
    height: 45px;
    border: 1px solid #1D1F22;
    cursor: pointer;
    background: ${props => props['isActive'] ? '#1D1F22' : 'transparent'};
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.05em;
    color: ${props => props['isActive'] ? '#FFFFFF' : '#1D1F22'};
    transition: .3s;
`

export const LabelColor = styled.label`
    width: 32px;
    height: 32px;
    border: none;
    display: block;
    cursor: pointer;
    position: relative;
    ::after {
        position: absolute;
        content: '';
        width: 36px;
        height: 36px;
        top: -3px;
        right: -2px;
        left: -3px;
        bottom: -2px;
        display: ${props => props['isActive'] ? 'block' : 'none'};
        border: 1px solid #5ECE7B;
        transition: .3s;
    }
`

export const Input = styled.input`
    display: none;
`

export const Checks = styled.div`
    display: flex;
    align-items: center;
    grid-column-gap: 12px;
    margin-bottom: 24px;
`

export const Button = styled.button`
    width: 292px;
    height: 52px;
    background: #5ECE7B;
    margin-bottom: 40px;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    text-transform: uppercase;
    color: #FFFFFF;
    border: none;
    outline: none;
    cursor: pointer;
`

export const Description = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 159.96%;
    color: #1D1F22;
`