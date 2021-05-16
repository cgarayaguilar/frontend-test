import styled, { keyframes } from 'styled-components'

const BREAKPOINT = '850px'

const slideBottom = keyframes`
  0% {
    transform: translateX(150px) rotateY(-90deg);
  }
  100% {
    transform: translateX(0) rotateY(0);
  }
`

export const Container = styled.div`
  background: #fff;
  width: 100%;
  z-index: 20;
  position: relative;

  @media (min-width: ${BREAKPOINT}) {
    background: transparent;
  }
`

export const Wrapper = styled.header`
  align-items: center;
  background: #fff;
  display: flex;
  height: 64px;
  justify-content: space-between;
  //position: relative;
  z-index: 10;

  width: 95%;
  max-width: 2000px;
  margin: 0 auto;

  @media (min-width: ${BREAKPOINT}) {
    background: transparent;
    height: 80px;
  }
`

export const Overlay = styled.div`
  min-height: 100vh;
  transition: all 1s ease;
  position: absolute;
  top: 64px;
  left: 0;
  right: 0;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: flex-start;
  background: ${({ theme }) => theme.degradedBlack};

  @media (min-width: ${BREAKPOINT}) {
    align-items: center;
    min-height: 0;
    background: transparent;
    height: 80px;
    position: static;
  }
`

export const NavBar = styled.nav`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fit, 1fr);
  grid-gap: 8px 24px;
  border-radius: 4px;
  background: #fff;
  margin: 5%;
  width: 90%;
  padding: 32px 0px;

  animation: ${slideBottom} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @media (min-width: ${BREAKPOINT}) {
    background: transparent;
    animation: none;
    grid-template-columns: repeat(5, max-content);
    grid-template-rows: max-content;
    justify-content: end;
    margin: 0;
    padding: 0;
    width: auto;
  }

  & a {
    text-decoration: none;
    font-family: Be Vietnam;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: ${({ theme }) => theme.secondaryText};
    position: relative;
    text-align: center;
    padding: 8px 0;

    &:hover {
      color: ${({ theme }) => theme.primaryText};
      font-weight: 700;
    }
  }
`
export const ButtonContainer = styled.div`
  padding: 0 5%;
  @media (min-width: ${BREAKPOINT}) {
    width: 200px;
    padding: 0;
  }
`
