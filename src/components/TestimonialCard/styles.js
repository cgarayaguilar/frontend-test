import styled from 'styled-components'

export const Container = styled.article`
  background-color: ${({ theme }) => theme.card};
  padding: 0 40px 40px 40px;
  text-align: center;
  min-height: 260px;
  margin: 20px 15px;

  & > img {
    transform: translateY(-36px);
    margin: 0 auto;
    width: 72px;
    height: 72px;
  }
`
