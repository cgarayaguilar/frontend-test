import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  z-index: 1;
  background-color: transparent;
  width: 100%;

  display: grid;
  grid-template-areas:
    'image image'
    'content content';
  align-items: center;
  grid-template-columns: 1fr;
  justify-items: center;
  grid-gap: 19px;
  margin-top: 5%;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    grid-template-areas: 'content image';
    grid-gap: 2%;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const TextContainer = styled.div`
  grid-area: content;
  & button {
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    max-width: 550px;
    & button {
      margin: 0 auto 0 0;
    }
  }
`

export const ImageContainer = styled.div`
  grid-area: 'image';
  text-align: center;

  & img {
    max-width: 540px;
    min-width: 250px;
    width: 80%;
  }

  @media (min-width: 768px) {
    text-align: right;

    & img {
      width: 100%;
    }
  }
`
