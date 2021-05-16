import styled from 'styled-components'

export const Container = styled.footer`
  min-height: 250px;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundDark};
`
export const Wrapper = styled.div`
  padding: 24px 16px;
  max-width: 2000px;
  margin: auto;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TwoColumns = styled.div`
  margin-top: 32px;
  display: grid;
  grid-gap: 5em;
  grid-template-columns: 1fr 1fr;
`
export const ContainerSocialMedia = styled.ul`
  margin-top: 16px;
  display: flex;
  list-style: none;
  li {
    cursor: pointer;
    padding: 8px;
  }
`

export const Column = styled.div`
  & span {
    &:hover {
      color: ${({ theme }) => theme.accent};
      cursor: pointer;
    }
  }

  max-width: 350px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`
