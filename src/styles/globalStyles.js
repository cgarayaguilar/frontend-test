import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import 'styles/normalize.css'

export const GlobalStyle = createGlobalStyle`
  *{ 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    height: 100%;
    width: 100%;
    margin: auto;
    font-weight: normal;
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.card};
  }

`

export const Wrapper = styled.section`
  width: 95%;
  max-width: 2000px;
  margin: auto;
`
