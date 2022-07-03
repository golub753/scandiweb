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
    margin-bottom: 8px;
`

export const Cost = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 24px;
    line-height: 18px;
    color: #1D1F22;
`