import styled from 'styled-components'

export const Container = styled.section`
  background-color: ${({ theme }) => theme.accent};
  min-height: 220px;
  padding: 40px 0;
`

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;

  padding: 0 16px;
  max-width: 2000px;
  margin: auto;
  width: 100%;

  @media (min-width: 680px) {
    width: 95%;
    padding: 0;
  }

  @media (min-width: 1024px) {
    h2 {
      max-width: 700px;
    }
    flex-wrap: nowrap;
    justify-content: space-between;
    text-align: left;
    align-items: center;
  }
`
