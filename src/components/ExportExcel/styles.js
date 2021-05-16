import styled from 'styled-components'

export const ExportButton = styled.button`
  width: 100%;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 22px;
  color: #fff;
  background: ${({ theme }) => theme.green};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 20px;
  font-size: 18px;
  font-weight: 700;

  & svg {
    margin-right: 16px;
  }
`
