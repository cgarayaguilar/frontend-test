import styled from 'styled-components'

export const Container = styled.section`
  min-height: 100vh;
  background-color: #fff;
  position: relative;
  overflow: hidden;
`

export const BackgroundImage = styled.img`
  position: absolute;
  top: -5%;
  right: -5%;
  z-index: 0;
  min-width: 244px;
  max-width: 850px;
  width: 100%;

  @media (min-width: 768px) {
    top: -10%;
    right: -10%;
  }
`

export const BackgroundImageMiddle = styled.img`
  position: absolute;
  bottom: -10%;
  left: -10%;
  z-index: 0;
  min-width: 244px;
  max-width: 850px;
  width: 100%;
  display: none;

  @media (min-width: 1024px) {
    display: block;
    bottom: -30%;
    left: -30%;
  }
`
