import styled from 'styled-components'

export const Container = styled.section`
  margin-top: 132px;
  position: relative;
  z-index: 10;
  text-align: center;
  grid-template-columns: 1fr;

  display: grid;
  grid-gap: 64px;

  @media (min-width: 768px) {
    text-align: left;
    grid-template-columns: 1fr 1fr;
  }
`
export const AboutRadix = styled.div`
  margin-bottom: 32px;
`
export const ListOfProducts = styled.div``
export const Product = styled.div`
  margin-bottom: 47px;
  text-align: left;

  @media (min-width: 1200px) {
    text-align: left;
  }
`

export const ProductTitle = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.accent2};
  border-radius: 22px;
  display: flex;
  margin-bottom: 8px;
  padding: 4px 0;

  @media (min-width: 960px) {
    margin-bottom: 0;
    background-color: transparent;
  }
`

export const ProductDescription = styled.div`
  margin-left: 0;

  @media (min-width: 960px) {
    margin-left: 82px;
  }
`

export const Badge = styled.div`
  margin-right: 15px;
  align-items: center;
  background-color: ${({ theme }) => theme.accent};
  border-radius: 22px;
  color: #fff;
  display: flex;
  font-family: Be Vietnam;
  font-size: 16px;
  font-weight: bold;
  height: 39px;
  justify-content: center;
  text-align: center;
  vertical-align: center;
  width: 67px;
`
