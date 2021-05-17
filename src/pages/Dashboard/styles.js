import styled from 'styled-components'

export const Container = styled.section`
  color: ${({ theme }) => theme.primaryText};
  background-color: ${({ theme }) => theme.background};
`

export const BackIcon = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;
  cursor: pointer;
  &svg {
    margin-right: 8px;
  }
`
