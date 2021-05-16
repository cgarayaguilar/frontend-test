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
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: 400;
  }

`

export const Wrapper = styled.section`
  padding: 0 16px;
  max-width: 2000px;
  margin: auto;
  width: 100%;

  @media (min-width: 680px) {
    width: 95%;
    padding: 0;
  }
`
