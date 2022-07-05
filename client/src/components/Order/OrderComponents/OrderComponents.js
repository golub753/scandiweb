import styled from "styled-components";

export const Block = styled.div`
    padding: 24px 0;
    border-bottom: 1px solid #E5E5E5;
    border-top: 1px solid #E5E5E5;
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const OrderInfo = styled.div`
    display: flex;
    flex-direction: column;
    grid-row-gap: 20px;
`

export const Brand = styled.div`
    font-weight: 600;
    font-size: 30px;
    line-height: 27px;
    color: #1D1F22;
`

export const Name = styled.div`
    font-weight: 400;
    font-size: 30px;
    line-height: 27px;
    color: #1D1F22;
`

export const Price = styled.div`
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #1D1F22;
`

export const Preview = styled.div`
    display: grid;
    grid-template-columns: 45px 200px;
    grid-column-gap: 24px;
`

export const Img = styled.img`
    width: 100%;
    height: 288px;
    object-fit: cover;
`

export const Controller = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const Counter = styled.div`
    font-weight: 500;
    font-size: 24px;
    line-height: 160%;
    color: #1D1F22;
`

export const Contr = styled.button`
    width: 45px;
    height: 45px;
    border: 1px solid #1D1F22;
    outline: none;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const Icon = styled.img``